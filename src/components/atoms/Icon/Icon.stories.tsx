import { Icon, IconProps } from './Icon';

export default {
	title: 'atoms/Icon',
	component: Icon,
};

export const IconStory = (args: IconProps) => <Icon {...args} />;

IconStory.storyName = 'Icon';
IconStory.args = {
	icon: 'GITHUB',
};
IconStory.argTypes = {
	icon: {
		control: {
			type: 'select',
			options: ['GITHUB', 'LINKEDIN', 'INSTAGRAM', 'TWITTER'],
		},
	},
};
IconStory.decorators = [
	(Story: any) => (
		<div style={{ width: 32, height: 32 }}>
			<Story />
		</div>
	),
];
