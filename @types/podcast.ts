import { IImage } from '@types';

export interface IPodcast {
	name: string;
	imagePath: string;
	url: string;
}

export interface IRawPodcast {
	name: string;
	url: string;
	logo: IImage;
}
