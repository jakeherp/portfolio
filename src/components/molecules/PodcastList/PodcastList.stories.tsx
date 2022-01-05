import { mockPodcast } from 'MockData';
import { PodcastList, PodcastListProps } from './PodcastList';

export default {
	title: 'molecules/PodcastList',
	component: PodcastList,
};

export const PodcastListStory = (args: PodcastListProps) => (
	<PodcastList {...args} />
);

PodcastListStory.storyName = 'PodcastList';
PodcastListStory.args = {
	podcasts: [mockPodcast],
};
