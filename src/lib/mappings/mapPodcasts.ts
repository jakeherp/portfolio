import { RawPodcast } from '@types';

export const mapPodcasts = (podcastsResponse: RawPodcast[]) =>
	podcastsResponse.map(({ name, url, logo }) => ({
		name,
		url,
		imagePath: logo.url,
	}));
