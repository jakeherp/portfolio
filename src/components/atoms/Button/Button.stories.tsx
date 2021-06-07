import { Button, ButtonProps } from './Button';

export default {
	title: 'atoms/Button',
	component: Button,
};

export const ButtonStory = (args: ButtonProps) => <Button {...args} />;

ButtonStory.storyName = 'Button';
ButtonStory.args = {
	children: 'Button Text',
	href: '/link',
	target: '_blank',
};
