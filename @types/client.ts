import { IImage } from '@types';

export interface IClient {
	name: string;
	url: string;
	logo: string;
}

export interface IRawClient {
	name: string;
	url: string;
	logo: IImage;
}
