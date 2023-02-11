import { BlockContent } from './blockContent';
import { Page } from './page';

export interface Post extends Page {
	intro: BlockContent[];
	publishedAt: string;
	updatedAt: string;
}
