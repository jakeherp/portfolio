import { IRawCaseStudy } from '@types';

export const mapCaseStudies = (caseStudiesResponse: IRawCaseStudy[]) =>
	caseStudiesResponse.map(
		({
			id,
			title,
			slug,
			seoDescription,
			projectUrl,
			client,
			content,
			technologies,
			primaryImage,
			secondaryImages,
		}) => ({
			id,
			title,
			slug,
			seoDescription,
			projectUrl: projectUrl || null,
			client: {
				name: client.name,
				logo: client.logo.url,
			},
			content: content.raw,
			technologies: technologies.map(({ skill }) => skill),
			primaryImage: primaryImage.url,
			secondaryImages: secondaryImages.map(({ url }) => url),
		})
	);
