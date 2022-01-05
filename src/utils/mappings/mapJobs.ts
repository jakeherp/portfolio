// TODO: add types
export const mapJobs = (jobsResponse: any) =>
	jobsResponse.map(
		({ company, jobTitle, fromDate, toDate, skills, description }: any) => ({
			company: {
				name: company.name,
				logo: company.logo.url,
				url: company.url,
			},
			jobTitle,
			fromDate,
			toDate,
			technologies: skills.map(({ skill }: any) => skill),
			description: description.markdown,
		})
	);
