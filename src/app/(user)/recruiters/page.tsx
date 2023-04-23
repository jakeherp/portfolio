import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { ContentBlock } from '@components/atoms/ContentBlock';
import { RecruiterForm } from '@components/molecules/RecruiterForm';
import { Salary } from '@components/molecules/Salary';

import { sanityClient } from '@lib/sanity';

import { pagesQuery } from '@queries/pages';
import { salaryQuery } from '@queries/salary';

import type { Page, Salary as SalaryRange } from '@types';

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
				<h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl">
					Hi, I&apos;m Jacob!
				</h1>
				<p className="headline mb-16 text-xl md:text-2xl lg:text-3xl">
					Nice to meet you.
				</p>

				<p className="mb-8 text-lg">
					Thank you for your interest in me for software engineering roles you
					are hiring for. ⁠I have created this page to save us both time and
					tell you exactly what I am looking for in my next position.
				</p>

				<h2 className="py-4 text-4xl font-bold">First things first</h2>
				<Salary salaryRange={salaryRange} />

				<ContentBlock value={page.body} />

				<RecruiterForm />
			</Container>
		</AnimatePage>
	);
};

export default RecruitersPage;
