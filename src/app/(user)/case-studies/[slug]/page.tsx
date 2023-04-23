import { AnimatePage } from '@components/atoms/AnimatePage';
import { Button } from '@components/atoms/Button';
import { Container } from '@components/atoms/Container';
import { ContentBlock } from '@components/atoms/ContentBlock';
import { FloatingImages } from '@components/atoms/FloatingImages';
import { ErrorFallback } from '@components/templates/ErrorFallback';

import { sanityClient } from '@lib/sanity';

import { caseStudiesQuery } from '@queries/caseStudies';

import type { CaseStudy } from '@types';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react';

const getData = async (slug: string) => {
	const caseStudy: [CaseStudy] = await sanityClient.fetch(
		caseStudiesQuery(slug)
	);

	return caseStudy[0];
};

interface PageProps {
	params: {
		slug: string;
	};
}

export const generateMetadata = async ({ params }: PageProps) => {
	const caseStudy = await getData(params.slug);
	return {
		title: `${caseStudy?.title} - Jacob Herper's Case Studies`,
		description: caseStudy?.seoDescription,
	};
};

const CaseStudyPage = async ({ params }: PageProps) => {
	const { slug } = params;

	try {
		const { title, client, skills, body, url, secondaryImages, mainImage } =
			await getData(slug);

		return (
			<AnimatePage>
				<Container>
					<h1 className="headline mt-8 pb-4 text-3xl md:text-4xl lg:text-5xl">
						{title}
					</h1>
					<div className="flex flex-col-reverse justify-between md:mb-12 md:h-72 md:flex-row">
						<div className="flex h-full flex-col justify-center">
							<strong className="mb-2 text-sm">Client:</strong>
							<div className="mb-4 flex items-center gap-2">
								<Image
									src={client.logo}
									alt={client.name}
									width={32}
									height={32}
									className="rounded-md"
								/>
								<h2 className="text-xl font-bold">{client.name}</h2>
							</div>
							<p className="w-80 text-sm">
								<strong>Tech used: </strong>
								{skills.join(', ')}
							</p>
							{url && (
								<div className="mt-8 flex">
									<Button href={url} target="_blank">
										Visit project
									</Button>
								</div>
							)}
						</div>
						<div className="-mb-8 md:mb-0">
							<FloatingImages
								topFloatingImage={secondaryImages[0]}
								bottomFloatingImage={secondaryImages[1]}
								mainImage={mainImage}
								altText={title}
							/>
						</div>
					</div>
					<ContentBlock value={body} />
				</Container>
			</AnimatePage>
		);
	} catch (error) {
		return <ErrorFallback />;
	}
};

export default CaseStudyPage;

export const generateStaticParams = async () => {
	const query = groq`
		*[_type == 'caseStudy'] {
			"slug": slug.current
		}
	`;

	const slugs: Pick<CaseStudy, 'slug'>[] = await sanityClient.fetch(query);

	return slugs.map(({ slug }) => ({ slug }));
};
