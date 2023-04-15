import { Podcast as PodcastType } from '@types';
import Image from 'next/image';

const Podcast = ({ name, logo, url }: PodcastType) => {
	return (
		<li className="snap-center overflow-hidden shrink-0 p-1 rounded-lg w-[128px] h-[128px] transition-all bg-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700">
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
