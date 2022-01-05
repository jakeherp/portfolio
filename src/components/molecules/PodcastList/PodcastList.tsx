import { IPodcast } from '@types';
import { Podcast } from 'Atoms/Podcast';

export interface PodcastListProps {
	podcasts: IPodcast[];
}

const PodcastList = ({ podcasts }: PodcastListProps) => {
	return (
		<ul className="relative w-full flex gap-4 snap-x scroll-mandatory overflow-x-auto pb-14">
			{podcasts.map((podcast) => (
				<Podcast {...podcast} key={podcast.name} />
			))}
		</ul>
	);
};

export { PodcastList };
