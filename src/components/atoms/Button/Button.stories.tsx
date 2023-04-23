/* eslint-disable import/no-anonymous-default-export */
import { Button, ButtonProps } from './Button';

export default {
	title: 'atoms/Button',
	component: Button,
};

export const ButtonStory = (args: ButtonProps) => <Button {...args} />;

ButtonStory.storyName = 'Button';
ButtonStory.args = {
	href: '/',
	children: 'Button',
	target: '_self',
};
