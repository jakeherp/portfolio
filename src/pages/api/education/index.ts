import { sanityClient } from '@lib/sanity';

import { educationQuery } from '@queries/education';

import type { Education } from '@types';
import { NextApiRequest, NextApiResponse } from 'next';

const educationApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const education: Education[] = await sanityClient.fetch(educationQuery);

	return res.status(200).json(education);
};

export default educationApi;
