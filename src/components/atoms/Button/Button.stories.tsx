import { Button, ButtonProps } from './Button';

export default {
	title: 'atoms/Button',
	component: Button,
};

export const ButtonStory = (args: ButtonProps) => <Button {...args} />;

ButtonStory.storyName = 'Button';
ButtonStory.args = {
	href: '/',
	text: 'Button',
	target: '_self',
};
