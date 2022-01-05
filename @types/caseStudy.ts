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
