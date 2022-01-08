import classNames from 'classnames';
import { ICaseStudy } from '@types';

import { Box } from 'Atoms/Box';
import { FloatingImages } from 'Atoms/FloatingImages';
import Image from 'next/image';
import Link from 'next/link';

export interface CaseStudyProps extends ICaseStudy {
	index: number;
}

const CaseStudy = ({
	slug,
	title,
	client,
	technologies,
	primaryImage,
	secondaryImages,
	index,
}: CaseStudyProps) => {
	const isEven = index % 2 === 0;

	return (
		<article className="mt-24 first-of-type:mt-0 transition md:hover:scale-[1.01]">
			<Link href={`/case-studies/${slug}`}>
				<a className="group">
					<Box>
						<div
							className={classNames('flex flex-col gap-4', {
								'md:flex-row': isEven,
								'md:flex-row-reverse': !isEven,
							})}
						>
							<div className="flex flex-col md:w-1/2 h-full">
								<h1 className="text-xl md:text-3xl font-bold mb-2">{title}</h1>
								<div className="mb-4 flex gap-2 items-center">
									<Image
										src={client.logo}
										alt={client.name}
										width={32}
										height={32}
										className="rounded-md"
									/>
									<h2 className="font-bold">{client.name}</h2>
								</div>
								<p className="text-sm max-w-xs">
									<strong>Tech used: </strong>
									{technologies.join(', ')}
								</p>
							</div>
							<div
								className={classNames(
									'-mb-12 -mx-10 md:mx-0 md:-mt-8 md:-mb-12',
									{
										'md:-mr-20': isEven,
										'md:-ml-20': !isEven,
									}
								)}
							>
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
