/* eslint-disable import/no-anonymous-default-export */
import { PodcastList, PodcastListProps } from './PodcastList';

import { mockPodcast } from '@mockdata';

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
