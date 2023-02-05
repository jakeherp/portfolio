import { IPodcast } from '@types';

import Image from 'next/image';

const Podcast = ({ name, imagePath, url }: IPodcast) => {
	return (
		<li className="snap-center shrink-0 p-1 rounded-md w-[128px] h-[128px] transition-all bg-transparent hover:bg-gradient-to-r hover:from-blue-start hover:to-blue-stop dark:hover:from-purple-start dark:hover:via-purple-middle dark:hover:to-purple-stop">
			<a href={url} target="_blank" rel="noopener noreferrer">
				<Image src={imagePath} alt={name} width={128} height={128} />
			</a>
		</li>
	);
};

export { Podcast };
