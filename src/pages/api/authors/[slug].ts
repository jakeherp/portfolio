import { sanityClient } from '@lib/sanity';

import { authorsQuery } from '@queries/authors';

import type { Author } from '@types';
import { NextApiRequest, NextApiResponse } from 'next';

const singleAuthorApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const slug = req.query.slug as string;

	const author: [Author] = await sanityClient.fetch(authorsQuery(slug));

	return res.status(200).json({ ...author[0] });
};

export default singleAuthorApi;
