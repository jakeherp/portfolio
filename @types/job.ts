export interface IJob {
	company: string;
	website?: string;
	jobTitle: string;
	startDate: string | Date;
	endDate: string | Date | null;
	technologies: string[];
	description: string;
	place: string;
}
