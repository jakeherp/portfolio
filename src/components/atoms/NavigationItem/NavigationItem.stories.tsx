/* eslint-disable import/no-anonymous-default-export */
import { NavigationItem, NavigationItemProps } from './NavigationItem';

export default {
	title: 'atoms/NavigationItem',
	component: NavigationItem,
};

export const NavigationItemStory = (args: NavigationItemProps) => (
	<ul className="flex gap-8 text-lg">
		<NavigationItem {...args} />
	</ul>
);

NavigationItemStory.storyName = 'NavigationItem';
NavigationItemStory.args = {
	href: '/',
	title: 'Navigation Link',
};
