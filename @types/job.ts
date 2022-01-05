import { ICompany } from '@types';

export interface IJob {
	company: ICompany;
	jobTitle: string;
	fromDate: string;
	toDate: string | null;
	technologies: string[];
	description: string;
}
