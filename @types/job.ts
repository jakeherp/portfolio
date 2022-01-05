import { IClient, IRawClient } from '@types';

export interface IJob {
	company: IClient;
	jobTitle: string;
	fromDate: string;
	toDate: string | null;
	technologies: string[];
	description: string;
}

export interface IRawJob {
	company: IRawClient;
	jobTitle: string;
	fromDate: string;
	toDate: string | null;
	skills: Array<{ skill: string }>;
	description: {
		markdown: string;
	};
}
