import { Box } from '@components/atoms/Box';
import { FloatingImages } from '@components/atoms/FloatingImages';

import type { CaseStudy as CaseStudyType } from '@types';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export interface CaseStudyProps extends CaseStudyType {
	index: number;
}

const CaseStudy = ({
	slug,
	title,
	client,
	skills,
	mainImage,
	secondaryImages,
	index,
}: CaseStudyProps) => {
	const isEven = index % 2 === 0;

	return (
		<article className="mt-24 transition first-of-type:mt-0 md:hover:scale-[1.01] lg:w-4/5">
			<Link href={`/case-studies/${slug}`} className="group">
				<Box>
					<div
						className={classNames('flex flex-col gap-4', {
							'md:flex-row': isEven,
							'md:flex-row-reverse': !isEven,
						})}
					>
						<div className="flex h-full flex-col md:w-1/2">
							<h1 className="mb-2 text-xl font-bold md:text-3xl">{title}</h1>
							<div className="mb-4 flex items-center gap-2">
								<Image
									src={client.logo}
									alt={client.name}
									width={32}
									height={32}
									className="rounded-md"
								/>
								<h2 className="font-bold">{client.name}</h2>
							</div>
							<p className="max-w-xs text-sm">
								<strong>Tech used: </strong>
								{skills.join(', ')}
							</p>
						</div>
						<div
							className={classNames(
								'-mx-10 -mb-12 md:mx-0 md:-mb-12 md:-mt-8',
								{
									'md:-mr-20': isEven,
									'md:-ml-20': !isEven,
								}
							)}
						>
							<FloatingImages
								topFloatingImage={secondaryImages[0]}
								bottomFloatingImage={secondaryImages[1]}
								mainImage={mainImage}
								altText={title}
							/>
						</div>
					</div>
				</Box>
			</Link>
		</article>
	);
};

export { CaseStudy };
