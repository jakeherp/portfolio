import { IClient, IRawClient } from '@types';

export interface IEducation {
	institute: IClient;
	course: string;
	date: string;
	technologies: string[];
}

export interface IRawEducation {
	course: string;
	date: string;
	institute: IRawClient;
	courseContents: Array<{ skill: string }>;
}
