import { Logo, LogoProps } from './Logo';

export default {
	title: 'atoms/Logo',
	component: Logo,
};

export const LogoStory = (args: LogoProps) => <Logo {...args} />;

LogoStory.storyName = 'Logo';
LogoStory.args = {};
