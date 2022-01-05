import { ICompany, IRawCompany } from '@types';

export interface IJob {
	company: ICompany;
	jobTitle: string;
	fromDate: string;
	toDate: string | null;
	technologies: string[];
	description: string;
}

export interface IRawJob {
	company: IRawCompany;
	jobTitle: string;
	fromDate: string;
	toDate: string | null;
	skills: Array<{ skill: string }>;
	description: {
		markdown: string;
	};
}
