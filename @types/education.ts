import { ICompany } from '@types';

export interface IEducation {
	institute: ICompany;
	course: string;
	date: string;
	technologies: string[];
}
