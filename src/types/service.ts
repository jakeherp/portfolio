import { BlockContent } from './blockContent';

export interface Service {
	title: string;
	slug: string;
	subtitle: string;
	body: BlockContent[];
	image: string;
}
