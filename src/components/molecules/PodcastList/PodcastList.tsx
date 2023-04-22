import { Podcast } from '@components/atoms/Podcast';

import type { Podcast as PodcastType } from '@types';

export interface PodcastListProps {
	podcasts: PodcastType[];
}

const PodcastList = ({ podcasts }: PodcastListProps) => {
	return (
		<ul className="scroll-mandatory relative -mx-4 flex w-[100vw] snap-x gap-4 overflow-x-auto px-4 pb-14 md:mx-0 md:w-full md:px-0">
			{podcasts.map((podcast) => (
				<Podcast {...podcast} key={podcast.name} />
			))}
		</ul>
	);
};

export { PodcastList };
