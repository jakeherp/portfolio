import { ICaseStudy } from '@types';

import { Box } from 'Atoms/Box';
import { FloatingImages } from 'Atoms/FloatingImages';
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
		<article className="mb-16 transition md:hover:scale-[1.01]">
			<Link href={`/case-studies/${slug}`}>
				<a className="group">
					<Box>
						<div className="flex flex-col md:flex-row gap-4">
							<div className="flex flex-col md:w-1/2 h-full">
								<h1 className="text-xl md:text-3xl font-bold mb-2">{title}</h1>
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
							<div className="-mb-12 -mx-4 md:mx-0 md:-mr-20 md:-mt-8 md:-mb-12">
								<FloatingImages
									topFloatingImage={secondaryImages[0]}
									bottomFloatingImage={secondaryImages[1]}
									mainImage={primaryImage}
									altText={title}
								/>
							</div>
						</div>
					</Box>
				</a>
			</Link>
		</article>
	);
};

export { CaseStudy };
