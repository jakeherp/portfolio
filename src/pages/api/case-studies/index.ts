import { sanityClient } from '@lib/sanity';

import { caseStudiesQuery } from '@queries/caseStudies';

import type { CaseStudy } from '@types';
import { NextApiRequest, NextApiResponse } from 'next';

const caseStudiesApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const caseStudies: CaseStudy[] = await sanityClient.fetch(caseStudiesQuery());

	return res.status(200).json(caseStudies);
};

export default caseStudiesApi;
