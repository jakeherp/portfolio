/* eslint-disable import/no-anonymous-default-export */
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
	mainImage: 'https://media.graphcms.com/1WO5SPTlRd2KnNrJH0hF',
	topFloatingImage: 'https://media.graphcms.com/A925zBXITvGXd25ICydM',
	bottomFloatingImage: 'https://media.graphcms.com/sVY8ZHnBSHiZeeVjFS3f',
	altText: 'Some image',
};
