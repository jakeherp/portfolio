// TODO: add types
export const mapEducation = (educationResponse: any) =>
	educationResponse.map(({ course, date, institute, courseContents }: any) => ({
		course,
		date,
		institute: {
			name: institute.name,
			url: institute.url,
			logo: institute.logo.url,
		},
		technologies: courseContents.map(({ skill }: any) => skill),
	}));
