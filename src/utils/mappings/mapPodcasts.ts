// TODO: add types
export const mapPodcasts = (podcastsResponse: any) =>
	podcastsResponse.map(({ name, url, logo }: any) => ({
		name,
		url,
		imagePath: logo.url,
	}));
