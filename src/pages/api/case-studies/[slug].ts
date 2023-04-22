import { sanityClient } from '@lib/sanity';

import { caseStudiesQuery } from '@queries/caseStudies';

import type { CaseStudy } from '@types';
import { NextApiRequest, NextApiResponse } from 'next';

const singleCaseStudyApi = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const slug = req.query.slug as string;

	// TODO: check why the case study is wrapped in an object with key '0'
	const caseStudy: { '0': CaseStudy } = await sanityClient.fetch(
		caseStudiesQuery(slug)
	);

	return res.status(200).json(caseStudy['0']);
};

export default singleCaseStudyApi;
