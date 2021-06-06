import { List } from './List';

export default {
	title: 'atoms/List',
	component: List,
};

export const ListStory = ({ children }: any) => <List>{children}</List>;

ListStory.storyName = 'List';
ListStory.args = {
	children: <li>List element</li>,
};
