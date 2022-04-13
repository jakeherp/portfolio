import { IRawJob } from '@types';

export const mapJobs = (jobsResponse: IRawJob[]) =>
	jobsResponse.map(
		({ company, jobTitle, fromDate, toDate, skills, description }) => ({
			company: {
				name: company.name,
				logo: company.logo.url,
				url: company.url,
			},
			jobTitle,
			fromDate,
			toDate,
			technologies: skills.map(({ skill }) => skill),
			description: description.raw,
		})
	);
