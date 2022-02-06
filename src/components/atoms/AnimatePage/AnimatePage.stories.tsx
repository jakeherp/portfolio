import { AnimatePage, AnimatePageProps } from './AnimatePage';

export default {
	title: 'atoms/AnimatePage',
	component: AnimatePage,
};

export const AnimatePageStory = (args: AnimatePageProps) => <AnimatePage {...args} />;

AnimatePageStory.storyName = 'AnimatePage';
AnimatePageStory.args = {};
