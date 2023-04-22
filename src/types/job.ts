import type { BlockContent, Company } from '@types';

export interface Job {
	jobTitle: string;
	company: Company;
	description: BlockContent[];
	fromDate: string;
	toDate: string | null;
	skills: string[];
}
