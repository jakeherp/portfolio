import { sanityClient } from '@lib/sanity';

import { podcastsQuery } from '@queries/podcasts';
import { NextApiRequest, NextApiResponse } from 'next';

const podcastsApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const podcasts = await sanityClient.fetch(podcastsQuery);

	return res.status(200).json(podcasts);
};

export default podcastsApi;
