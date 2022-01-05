import { BurgerIcon, BurgerIconProps } from './BurgerIcon';

export default {
	title: 'atoms/BurgerIcon',
	component: BurgerIcon,
};

export const BurgerIconStory = (args: BurgerIconProps) => (
	<BurgerIcon {...args} />
);

BurgerIconStory.storyName = 'BurgerIcon';
BurgerIconStory.args = {};
