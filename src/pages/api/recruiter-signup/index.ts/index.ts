import mailchimp from '@mailchimp/mailchimp_marketing';
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

		return res.status(201).json({ error: '' });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		return res.status(500).json({ error: err.message || err.toString() });
	}
};

export default signupHandler;
