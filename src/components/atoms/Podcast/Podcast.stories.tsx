import { Podcast as PodcastType } from '@types';
import { mockPodcast } from '@mockdata';
import { Podcast } from './Podcast';

export default {
	title: 'atoms/Podcast',
	component: Podcast,
};

export const PodcastStory = (args: PodcastType) => <Podcast {...args} />;

PodcastStory.storyName = 'Podcast';
PodcastStory.args = mockPodcast;
