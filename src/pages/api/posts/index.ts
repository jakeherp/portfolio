import { sanityClient } from '@lib/sanity';

import { postsQuery } from '@queries/posts';

import type { Post } from '@types';
import { NextApiRequest, NextApiResponse } from 'next';

const postsApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const posts: Post[] = await sanityClient.fetch(postsQuery());

	return res.status(200).json(posts);
};

export default postsApi;
