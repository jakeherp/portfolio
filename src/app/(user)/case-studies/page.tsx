'use client';

import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';

const CaseStudiesPage = () => {
	return (
		<AnimatePage>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
					Case Studies
				</h1>
				{/* {caseStudies.map((caseStudy, i) => (
					<CaseStudy key={caseStudy.slug} {...caseStudy} index={i} />
				))} */}
			</Container>
		</AnimatePage>
	);
};

export default CaseStudiesPage;
