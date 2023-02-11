import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { CaseStudy } from '@components/molecules/CaseStudy';

import { sanityClient } from '@lib/sanity';

import { caseStudiesQuery } from '@root/src/queries/caseStudies';
import { CaseStudy as CaseStudyType } from '@types';

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
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
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
