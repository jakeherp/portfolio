/* eslint-disable import/no-anonymous-default-export */
import { BurgerIcon, BurgerIconProps } from './BurgerIcon';

export default {
	title: 'atoms/BurgerIcon',
	component: BurgerIcon,
};

export const BurgerIconStory = (args: BurgerIconProps) => {
	return <BurgerIcon {...args} />;
};

BurgerIconStory.storyName = 'BurgerIcon';
BurgerIconStory.args = {
	isOpen: false,
};
