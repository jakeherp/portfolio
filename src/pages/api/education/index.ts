import { sanityClient } from '@lib/sanity';

import { educationQuery } from '@queries/education';
import { NextApiRequest, NextApiResponse } from 'next';

const educationApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const education = await sanityClient.fetch(educationQuery);

	return res.status(200).json(education);
};

export default educationApi;
