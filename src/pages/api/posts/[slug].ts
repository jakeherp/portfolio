import { sanityClient } from '@lib/sanity';

import { postsQuery } from '@queries/posts';

import type { Post } from '@types';
import { NextApiRequest, NextApiResponse } from 'next';

const singlePostApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const slug = req.query.slug as string;

	const post: [Post] = await sanityClient.fetch(postsQuery(slug));

	return res.status(200).json(post[0]);
};

export default singlePostApi;
