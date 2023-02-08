import { sanityClient } from '@lib/sanity';

import { caseStudiesQuery } from '@queries/caseStudies';
import { NextApiRequest, NextApiResponse } from 'next';

const caseStudiesApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const caseStudies = await sanityClient.fetch(caseStudiesQuery());

	return res.status(200).json(caseStudies);
};

export default caseStudiesApi;
