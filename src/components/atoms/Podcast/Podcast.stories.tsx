/* eslint-disable import/no-anonymous-default-export */
import { Podcast } from './Podcast';

import { mockPodcast } from '@mockdata';
import type { Podcast as PodcastType } from '@types';

export default {
	title: 'atoms/Podcast',
	component: Podcast,
};

export const PodcastStory = (args: PodcastType) => {
	return (
		<ul className="scroll-mandatory relative -mx-4 flex w-[100vw] snap-x gap-4 overflow-x-auto px-4 pb-14 md:mx-0 md:w-full md:px-0">
			<Podcast {...args} />
		</ul>
	);
};

PodcastStory.storyName = 'Podcast';
PodcastStory.args = mockPodcast;
