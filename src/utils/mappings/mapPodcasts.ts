import { IRawPodcast } from '@types';

export const mapPodcasts = (podcastsResponse: IRawPodcast[]) =>
	podcastsResponse.map(({ name, url, logo }) => ({
		name,
		url,
		imagePath: logo.url,
	}));
