import { Podcast } from '@components/atoms/Podcast';

import { Podcast as PodcastType } from '@types';

export interface PodcastListProps {
	podcasts: PodcastType[];
}

const PodcastList = ({ podcasts }: PodcastListProps) => {
	return (
		<ul className="relative px-4 md:px-0 -mx-4 md:mx-0 w-[100vw] md:w-full flex gap-4 snap-x scroll-mandatory overflow-x-auto pb-14">
			{podcasts.map((podcast) => (
				<Podcast {...podcast} key={podcast.name} />
			))}
		</ul>
	);
};

export { PodcastList };
