import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { ContentBlock } from '@components/atoms/ContentBlock';
import { RecruiterForm } from '@components/molecules/RecruiterForm';
import { Salary } from '@components/molecules/Salary';

import { sanityClient } from '@lib/sanity';

import { pagesQuery } from '@queries/pages';
import { salaryQuery } from '@queries/salary';
import { Page, Salary as SalaryRange } from '@types';

export const metadata = {
	title: 'Recruiter Information about Jacob Herper',
	description:
		'Thank you for your interest in me for software engineering roles you are hiring for.',
};

const getData = async () => {
	const page: [Page] = await sanityClient.fetch(pagesQuery('recruiters'));
	const salaryRange: SalaryRange = await sanityClient.fetch(salaryQuery);

	return {
		page: page[0],
		salaryRange,
	};
};

const RecruitersPage = async () => {
	const { page, salaryRange } = await getData();

	return (
		<AnimatePage>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					Hi, I&apos;m Jacob!
				</h1>
				<p className="headline text-xl md:text-2xl lg:text-3xl mb-16">
					Nice to meet you.
				</p>

				<h2 className="text-4xl py-4 font-bold">First things first</h2>
				<Salary salaryRange={salaryRange} />

				<ContentBlock value={page.body} />

				<RecruiterForm />
			</Container>
		</AnimatePage>
	);
};

export default RecruitersPage;
