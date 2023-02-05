import { SocialIcons, SocialIconsProps } from './SocialIcons';

export default {
	title: 'molecules/SocialIcons',
	component: SocialIcons,
};

export const SocialIconsStory = (args: SocialIconsProps) => (
	<SocialIcons {...args} />
);

SocialIconsStory.storyName = 'SocialIcons';
SocialIconsStory.args = {
	profiles: [
		{
			url: 'https://github.com',
			name: 'Github',
			icon: 'GITHUB',
		},
	],
};
