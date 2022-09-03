import { ICaseStudy } from '@types';

import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import Image from 'next/image';
import { NextPage } from 'next';
import { RichText } from '@graphcms/rich-text-react-renderer';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { FloatingImages } from 'Atoms/FloatingImages';
import { SeoHead } from 'Atoms/SeoHead';

import { mapCaseStudies } from 'Utils/mappings/mapCaseStudies';
import { mdxComponents } from 'Utils/mdxComponents';

interface IProps {
	caseStudy: ICaseStudy;
}

const CaseStudyPage: NextPage<IProps> = ({ caseStudy }) => {
	const {
		title,
		content,
		seoDescription,
		client,
		technologies,
		secondaryImages,
		primaryImage,
		projectUrl,
	} = caseStudy;

	return (
		<AnimatePage>
			<SeoHead
				title={`Case Study: ${title} - Jacob Herper's Case Studies`}
				description={seoDescription}
			/>
			<Container>
				<h1 className="headline text-3xl md:text-4xl lg:text-5xl mt-8 pb-4">
					{title}
				</h1>
				<div className="flex flex-col-reverse md:flex-row justify-between md:h-72 md:mb-12">
					<div className="flex flex-col h-full justify-center">
						<strong className="mb-2 text-sm">Client:</strong>
						<div className="mb-4 flex gap-2 items-center">
							<Image
								src={client.logo}
								alt={client.name}
								width={32}
								height={32}
								className="rounded-md"
							/>
							<h2 className="font-bold text-xl">{client.name}</h2>
						</div>
						<p className="text-sm w-80">
							<strong>Tech used: </strong>
							{technologies.join(', ')}
						</p>
						{projectUrl && (
							<div className="flex mt-8">
								<Button href={projectUrl} target="_blank" className="group">
									<span className="block headline group-hover:text-off-white">
										Visit project
									</span>
								</Button>
							</div>
						)}
					</div>
					<div className="-mb-8 md:mb-0">
						<FloatingImages
							topFloatingImage={secondaryImages[0]}
							bottomFloatingImage={secondaryImages[1]}
							mainImage={primaryImage}
							altText={title}
						/>
					</div>
				</div>
				<RichText content={content} renderers={mdxComponents} />
			</Container>
		</AnimatePage>
	);
};

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query CaseStudiesQuery {
				caseStudies {
					slug
					title
				}
			}
		`,
	});

	return {
		paths: data.caseStudies.map(({ slug }: ICaseStudy) => ({
			params: { slug },
		})),
		fallback: false,
	};
}

type Params = {
	params: { slug: ICaseStudy['slug'] };
};

export async function getStaticProps({ params }: Params) {
	const { data } = await client.query({
		query: gql`
			query CaseStudyPageQuery($slug: String!) {
				caseStudy(where: { slug: $slug }) {
					id
					title
					slug
					projectUrl
					seoDescription
					client {
						name
						logo {
							url
						}
					}
					content {
						raw
					}
					technologies {
						skill
					}
					primaryImage {
						url
					}
					secondaryImages {
						url
					}
				}
			}
		`,
		variables: { slug: params.slug },
	});

	return {
		props: {
			caseStudy: mapCaseStudies([data.caseStudy])[0],
		},
	};
}

export default CaseStudyPage;
