import { FloatingImages, FloatingImagesProps } from './FloatingImages';

export default {
	title: 'atoms/FloatingImages',
	component: FloatingImages,
};

export const FloatingImagesStory = (args: FloatingImagesProps) => (
	<FloatingImages {...args} />
);

FloatingImagesStory.storyName = 'FloatingImages';
FloatingImagesStory.args = {
	mainImage: '/some-img.png',
	topFloatingImage: '/top-image.png',
	bottomFloatingImage: '/bottom-image.png',
	altText: 'Some image',
};
