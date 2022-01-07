import { FloatingImages, FloatingImagesProps } from './FloatingImages';

export default {
	title: 'atoms/FloatingImages',
	component: FloatingImages,
};

export const FloatingImagesStory = (args: FloatingImagesProps) => <FloatingImages {...args} />;

FloatingImagesStory.storyName = 'FloatingImages';
FloatingImagesStory.args = {};
