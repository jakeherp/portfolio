import { BlockContent } from './blockContent';

export interface Page {
	body: BlockContent[];
	seoDescription: string;
	slug: string;
	title: string;
}
