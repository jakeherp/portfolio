import { withSentry } from '@sentry/nextjs';
import { NextApiRequest, NextApiResponse } from 'next';

import getConfig from 'next/config';
import mailchimp from '@mailchimp/mailchimp_marketing';
import md5 from 'md5';

const {
	publicRuntimeConfig: {
		MAILCHIMP_API_KEY,
		MAILCHIMP_API_SERVER,
		MAILCHIMP_AUDIENCE_ID,
	},
} = getConfig();

mailchimp.setConfig({
	apiKey: MAILCHIMP_API_KEY,
	server: MAILCHIMP_API_SERVER,
});

const signupHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { firstName, lastName, company, email, type } = req.body;

	if (!email) {
		return res.status(400).json({ error: 'Email is required' });
	}

	const hashedEmail = md5(email);

	try {
		await mailchimp.lists.setListMember(MAILCHIMP_AUDIENCE_ID, hashedEmail, {
			email_address: email,
			// @ts-expect-error something about the enum
			status: 'subscribed',
			merge_fields: {
				FNAME: firstName,
				LNAME: lastName,
				COMPANY: company,
				TYPE: type,
			},
		});

		return res.status(201).json({ error: '' });
	} catch (err: any) {
		return res.status(500).json({ error: err.message || err.toString() });
	}
};

export default withSentry(signupHandler);
