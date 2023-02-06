import { Podcast } from './Podcast';

import { mockPodcast } from '@mockdata';
import { Podcast as PodcastType } from '@types';

export default {
	title: 'atoms/Podcast',
	component: Podcast,
};

export const PodcastStory = (args: PodcastType) => <Podcast {...args} />;

PodcastStory.storyName = 'Podcast';
PodcastStory.args = mockPodcast;
