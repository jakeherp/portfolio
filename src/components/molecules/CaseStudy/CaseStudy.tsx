import { ICaseStudy } from '@types';

import { Box } from 'Atoms/Box';
import Image from 'next/image';
import Link from 'next/link';

const CaseStudy = ({
	slug,
	title,
	client,
	technologies,
	primaryImage,
	secondaryImages,
}: ICaseStudy) => {
	return (
		<article className="mb-32 transition md:hover:scale-[1.01]">
			<Link href={`/case-studies/${slug}`}>
				<a className="group">
					<Box>
						<div className="relative md:h-72">
							<div className="flex flex-col h-full justify-center">
								<h1 className="text-3xl font-bold mb-2 relative inline-block">
									{title}
								</h1>
								<div className="mb-4 flex gap-2 items-center">
									<Image
										src={client.logo}
										alt={client.name}
										width={32}
										height={32}
									/>
									<h2 className="font-bold">{client.name}</h2>
								</div>
								<p className="text-sm w-80">
									<strong>Tech used: </strong>
									{technologies.join(', ')}
								</p>
							</div>
							<div className="mt-6 md:mt-0 md:relative w-full md:w-[475px] md:-top-72 md:-right-96">
								<div className="absolute w-1/2 md:w-auto top-40 right-28 md:-top-10 md:right-20 z-20 animate-hover">
									<Image
										src={secondaryImages[0]}
										width={330}
										height={210}
										alt={client.name}
									/>
								</div>
								<Image
									src={primaryImage}
									width={475}
									height={275}
									alt={title}
									className="absolute"
								/>
								<div className="absolute w-1/2 md:w-auto top-64 right-20 md:top-40 md:right-20 z-20 animate-hover animation-delay">
									<Image
										src={secondaryImages[1]}
										width={330}
										height={210}
										alt={client.name}
									/>
								</div>
							</div>
						</div>
					</Box>
				</a>
			</Link>
		</article>
	);
};

export { CaseStudy };
