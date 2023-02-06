'use client';

import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { RecruiterForm } from '@components/molecules/RecruiterForm';

import { useState } from 'react';

const RecruitersPage = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = async (
		formValues: Record<string, string>,
		setSubmitting: (arg: boolean) => void,
		resetForm: () => void
	) => {
		setError(false);
		setSuccess(false);

		const res = await fetch('/api/signup', {
			body: JSON.stringify(formValues),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		const { error } = await res.json();

		if (error) {
			setError(true);
			console.error('Mailchimp Error:', error);
			setSubmitting(false);
			return;
		}

		setSubmitting(false);
		setSuccess(true);
		resetForm();
	};

	return (
		<AnimatePage>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					Hi, I&apos;m Jacob!
				</h1>
				<h2 className="headline text-xl md:text-2xl lg:text-3xl">
					Nice to meet you.
				</h2>
				{/* <RichText
					content={markdown}
					references={references}
					renderers={{
						...mdxComponents,
						embed: {
							Salary: () => <Salary salaryRange={salary} />,
						},
					}}
				/> */}

				<RecruiterForm
					handleSubmit={handleSubmit}
					success={success}
					error={error}
				/>
			</Container>
		</AnimatePage>
	);
};

export default RecruitersPage;
