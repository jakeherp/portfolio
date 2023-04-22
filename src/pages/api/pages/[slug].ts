import { sanityClient } from '@lib/sanity';

import { pagesQuery } from '@queries/pages';

import type { Page } from '@types';
import { NextApiRequest, NextApiResponse } from 'next';

const singlePageApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const slug = req.query.slug as string;

	const page: [Page] = await sanityClient.fetch(pagesQuery(slug));

	return res.status(200).json(page[0]);
};

export default singlePageApi;
