import type { Podcast as PodcastType } from '@types';
import Image from 'next/image';

const Podcast = ({ name, logo, url }: PodcastType) => {
	return (
		<li className="h-[128px] w-[128px] shrink-0 snap-center overflow-hidden rounded-lg bg-transparent p-1 transition-all hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700">
			<a href={url} target="_blank" rel="noopener noreferrer">
				<Image
					src={logo}
					alt={name}
					width={128}
					height={128}
					className="rounded-md"
				/>
			</a>
		</li>
	);
};

export { Podcast };
