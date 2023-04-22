import type { Company } from '@types';

export interface Education {
	course: string;
	courseContents: string[];
	date: string;
	institution: Company;
}
