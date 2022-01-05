import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { ICaseStudy } from '@types';
import { mapCaseStudies } from 'utils/mappings/mapCaseStudies';
import { NextPage } from 'next';

import { CaseStudy } from 'Molecules/CaseStudy';
import { Container } from 'Atoms/Container';
import { Layout } from 'Templates/Layout';

interface IProps {
	caseStudies: any;
}

const CaseStudiesPage: NextPage<IProps> = ({ caseStudies }) => {
	return (
		<Layout
			title="Software Engineering Case Studies – Jacob Herper"
			description={`Here you can find ${caseStudies.length} case studies of projects I have worked on over the last few years. Learn how I have overcome challenges.`}
		>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8 mb-12">
					Case Studies
				</h1>
				{caseStudies.map((caseStudy: ICaseStudy) => (
					<CaseStudy key={caseStudy.slug} {...caseStudy} />
				))}
			</Container>
		</Layout>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query CaseStudiesQuery {
				caseStudies(orderBy: updatedAt_DESC) {
					id
					title
					slug
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
	});

	return {
		props: {
			caseStudies: mapCaseStudies(data.caseStudies),
		},
	};
}

export default CaseStudiesPage;
