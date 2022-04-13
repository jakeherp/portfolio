import { RichTextContent } from '@graphcms/rich-text-types';
import { ICompany, IRawCompany } from '@types';

export interface IJob {
	company: ICompany;
	jobTitle: string;
	fromDate: string;
	toDate: string | null;
	technologies: string[];
	description: RichTextContent;
}

export interface IRawJob {
	company: IRawCompany;
	jobTitle: string;
	fromDate: string;
	toDate: string | null;
	skills: Array<{ skill: string }>;
	description: {
		raw: RichTextContent;
	};
}
