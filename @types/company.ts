import { IImage } from '@types';

export interface ICompany {
	name: string;
	url: string;
	logo: string;
}

export interface IRawCompany {
	name: string;
	url: string;
	logo: IImage;
}
