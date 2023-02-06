import { Image, RawCompany } from '@types';

export interface CaseStudy {
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

export interface RawCaseStudy {
	id: string;
	title: string;
	slug: string;
	seoDescription: string;
	projectUrl?: string;
	client: RawCompany;
	content: {
		raw: string;
	};
	technologies: Array<{ skill: string }>;
	primaryImage: Image;
	secondaryImages: Image[];
}
