/* eslint-disable import/no-anonymous-default-export */
import { MobileMenu, MobileMenuProps } from './MobileMenu';

export default {
	title: 'molecules/MobileMenu',
	component: MobileMenu,
};

export const MobileMenuStory = (args: MobileMenuProps) => (
	<MobileMenu {...args} />
);

MobileMenuStory.storyName = 'MobileMenu';
MobileMenuStory.args = {
	isOpen: false,
};
