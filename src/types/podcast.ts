import { Image } from '@types';

export interface Podcast {
	name: string;
	imagePath: string;
	url: string;
}

export interface RawPodcast {
	name: string;
	url: string;
	logo: Image;
}
