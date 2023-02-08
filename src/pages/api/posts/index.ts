import { sanityClient } from '@lib/sanity';

import { postsQuery } from '@queries/posts';
import { NextApiRequest, NextApiResponse } from 'next';

const postsApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const posts = await sanityClient.fetch(postsQuery());

	return res.status(200).json(posts);
};

export default postsApi;
