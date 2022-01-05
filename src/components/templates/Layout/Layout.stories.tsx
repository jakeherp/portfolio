import { Layout, Props } from './Layout';

export default {
	title: 'templates/Layout',
	component: Layout,
};

export const LayoutStory = (args: Props) => <Layout {...args} />;

LayoutStory.storyName = 'Layout';
LayoutStory.args = {
	title: 'Some title',
};
