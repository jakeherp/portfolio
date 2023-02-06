import { Company, RawCompany } from '@types';

export interface Education {
	institute: Company;
	course: string;
	date: string;
	technologies: string[];
}

export interface RawEducation {
	course: string;
	date: string;
	institute: RawCompany;
	courseContents: Array<{ skill: string }>;
}
