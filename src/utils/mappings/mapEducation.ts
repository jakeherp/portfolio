import { IRawEducation } from '@types';

export const mapEducation = (educationResponse: IRawEducation[]) =>
	educationResponse.map(({ course, date, institute, courseContents }) => ({
		course,
		date,
		institute: {
			name: institute.name,
			url: institute.url,
			logo: institute.logo.url,
		},
		technologies: courseContents.map(({ skill }) => skill),
	}));
