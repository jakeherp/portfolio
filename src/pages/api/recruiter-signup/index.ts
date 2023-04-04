import mailchimp from '@mailchimp/mailchimp_marketing';
import * as Sentry from '@sentry/nextjs';
import md5 from 'md5';
import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';

const {
	publicRuntimeConfig: { mailchimpApiServer, mailchimpAudienceId },
	serverRuntimeConfig: { mailchimpApiKey },
} = getConfig();

mailchimp.setConfig({
	apiKey: mailchimpApiKey,
	server: mailchimpApiServer,
});

const signupHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { firstName, lastName, company, email, type } = req.body;

	if (req.method !== 'POST') {
		return res
			.status(405)
			.json({ error: `Method '${req.method}' not allowed` });
	}

	if (!email) {
		return res.status(400).json({ error: 'Email is required' });
	}

	const hashedEmail = md5(email);

	try {
		await mailchimp.lists.setListMember(mailchimpAudienceId, hashedEmail, {
			email_address: email,
			status_if_new: 'subscribed',
			merge_fields: {
				FNAME: firstName,
				LNAME: lastName,
				COMPANY: company,
				TYPE: type,
			},
		});

		Sentry.captureEvent({
			message: 'Recruiter Signup registered',
			tags: { company, type },
			level: 'info',
		});

		return res.status(201).json({ error: '' });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		Sentry.captureException(err);
		return res.status(500).json({ error: err.message || err.toString() });
	}
};

export default signupHandler;
