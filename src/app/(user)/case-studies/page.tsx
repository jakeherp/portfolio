import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { CaseStudy } from '@components/molecules/CaseStudy';

import { sanityClient } from '@lib/sanity';

import { caseStudiesQuery } from '@queries/caseStudies';

import type { CaseStudy as CaseStudyType } from '@types';

export const metadata = {
	title: 'Software Engineering Case Studies – Jacob Herper',
	description:
		'Here you can find case studies of projects I have worked on over the last few years. Learn how I have overcome challenges.',
};

const getData = async () => {
	const caseStudies: CaseStudyType[] = await sanityClient.fetch(
		caseStudiesQuery()
	);

	return caseStudies;
};

const CaseStudiesPage = async () => {
	const caseStudies = await getData();

	return (
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 pb-8 text-3xl md:text-5xl lg:text-6xl">
					Case Studies
				</h1>
				{caseStudies.map((caseStudy, i) => (
					<CaseStudy key={caseStudy.slug} {...caseStudy} index={i} />
				))}
			</Container>
		</AnimatePage>
	);
};

export default CaseStudiesPage;
