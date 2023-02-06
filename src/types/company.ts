import { Image } from '@/types';

export interface Company {
	name: string;
	url: string;
	logo: string;
}

export interface RawCompany {
	name: string;
	url: string;
	logo: Image;
}
