// TODO: add types
export const mapCaseStudies = (caseStudiesResponse: any) =>
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
		}: any) => ({
			id,
			title,
			slug,
			seoDescription,
			projectUrl: projectUrl || null,
			client: {
				name: client.name,
				logo: client.logo.url,
			},
			content: content.markdown,
			technologies: technologies.map(({ skill }: any) => skill),
			primaryImage: primaryImage.url,
			secondaryImages: secondaryImages.map(({ url }: any) => url),
		})
	);
