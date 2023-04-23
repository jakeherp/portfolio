'use client';

import { Box } from '@components/atoms/Box';
import { Button } from '@components/atoms/Button';
import { Input } from '@components/atoms/Input';
import { Select } from '@components/atoms/Select';

import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export const RecruiterForm = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const typeOptions = [
		'I am an in-house recruiter',
		'I work for a recruitment firm',
		'I am an independent recruiter',
		'None of the above',
	];

	const handleSubmit = async (
		formValues: Record<string, string>,
		setSubmitting: (arg: boolean) => void,
		resetForm: () => void
	) => {
		setError(false);
		setSuccess(false);

		const res = await fetch('/api/recruiter-signup', {
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

	const validationSchema = Yup.object({
		firstName: Yup.string().required('This field is required'),
		lastName: Yup.string().required('This field is required'),
		email: Yup.string()
			.email('Please enter a valid email address')
			.required('This field is required'),
		company: Yup.string(),
		type: Yup.mixed()
			.oneOf(typeOptions, 'Please select an option')
			.required('Please select an option'),
	});

	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				company: '',
				type: '',
			}}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				handleSubmit(values, setSubmitting, resetForm);
			}}
		>
			{({ isSubmitting }) => (
				<Form role="form" className="mt-8">
					<Box>
						{success && (
							<div className="rounded-md bg-green-100 px-4 py-2 font-bold text-green-600 ring-1 ring-green-600">
								Thanks for signing up to my mailing list! I&apos;ll reach out as
								soon as I&apos;m ready for my next position.
							</div>
						)}
						{error && (
							<div className="rounded-md bg-red-100 px-4 py-2 font-bold text-red-600 ring-1 ring-red-600">
								Something went wrong, please try again!
							</div>
						)}
						<Input label="First Name" placeholder="John" id="firstName" />
						<Input label="Last Name" placeholder="Doe" id="lastName" />
						<Input label="Company" id="company" />
						<Input
							label="Email Address"
							placeholder="johndoe@gmail.com"
							id="email"
							type="email"
						/>
						<Select label="Who are you?" id="type" options={typeOptions} />
						<div className="mt-6">
							<Button
								type="submit"
								disabled={isSubmitting}
								onClick={(noop: unknown) => noop}
								className="group"
							>
								{isSubmitting ? 'Loading ...' : 'Sign up'}
							</Button>
						</div>
					</Box>
				</Form>
			)}
		</Formik>
	);
};
