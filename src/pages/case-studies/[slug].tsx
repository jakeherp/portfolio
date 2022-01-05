import { ICaseStudy } from '@types';

import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Markdown from 'react-markdown';
import { NextPage } from 'next';

import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { Layout } from 'Templates/Layout';
import { mapCaseStudies } from 'utils/mappings/mapCaseStudies';
import { mdxComponents } from 'utils/mdxComponents';

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
		<Layout
			title={`Case Study: ${title} - Jacob Herper's Case Studies`}
			description={seoDescription}
		>
			<Container>
				<h1 className="headline text-3xl md:text-4xl lg:text-5xl mt-8 pb-8">
					{title}
				</h1>
				<div className="relative md:h-72 md:mb-32">
					<div className="flex flex-col h-full justify-center">
						<strong className="mb-2 text-sm">Client:</strong>
						<div className="mb-4 flex gap-2 items-center">
							<Image
								src={client.logo}
								alt={client.name}
								width={32}
								height={32}
							/>
							<h2 className="font-bold text-xl">{client.name}</h2>
						</div>
						<p className="text-sm w-80">
							<strong>Tech used: </strong>
							{technologies.join(', ')}
						</p>
						{projectUrl && (
							<div className="w-auto mt-8">
								<Button href={projectUrl} target="_blank">
									Visit project
								</Button>
							</div>
						)}
					</div>
					<div className="mt-6 md:mt-0 md:relative w-full md:w-[475px] md:-top-72 md:-right-1/2">
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
				<Markdown components={mdxComponents}>{content}</Markdown>
			</Container>
		</Layout>
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
						markdown
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
