import { sanityClient } from '@lib/sanity';

import { authorsQuery } from '@queries/authors';

import type { Author } from '@types';
import { NextApiRequest, NextApiResponse } from 'next';

const authorsApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const authors: Author[] = await sanityClient.fetch(authorsQuery());

	return res.status(200).json(authors);
};

export default authorsApi;
