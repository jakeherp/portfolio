import { IImage, IRawCompany } from '@types';

export interface ICaseStudy {
	id: string;
	slug: string;
	seoDescription: string;
	title: string;
	projectUrl?: string;
	client: {
		name: string;
		logo: string;
	};
	content: string;
	technologies: string[];
	primaryImage: string;
	secondaryImages: string[];
}

export interface IRawCaseStudy {
	id: string;
	title: string;
	slug: string;
	seoDescription: string;
	projectUrl?: string;
	client: IRawCompany;
	content: {
		markdown: string;
	};
	technologies: Array<{ skill: string }>;
	primaryImage: IImage;
	secondaryImages: IImage[];
}
