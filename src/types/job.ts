import { Company, RawCompany } from '@/types';

export interface Job {
	company: Company;
	jobTitle: string;
	fromDate: string;
	toDate: string | null;
	technologies: string[];
	description: string;
}

export interface RawJob {
	company: RawCompany;
	jobTitle: string;
	fromDate: string;
	toDate: string | null;
	skills: Array<{ skill: string }>;
	description: {
		raw: string;
	};
}
