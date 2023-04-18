'use client';

import { Box } from '@components/atoms/Box';
import { Button } from '@components/atoms/Button';
import { Input } from '@components/atoms/Input';
import { Select } from '@components/atoms/Select';
import { TextArea } from '@components/atoms/TextArea';

import { useCookie } from '@hooks/useCookie';

import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';

export const ContactForm = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [cookie, setCookie] = useCookie('contactFormSubmission', '');

	const subjects = [
		'I need a website / app developed',
		'Feedback on this website',
		'General Inquiry',
		'I am a recruiter and want to hire you',
		'Other',
	];

	const canSubmit = (cookie: string) => {
		if (!cookie || cookie === '') {
			return true;
		}

		const date = new Date(cookie);
		const now = new Date();

		if (date.getTime() + 60_000 * 60 * 60 * 24 > now.getTime()) {
			return false;
		}

		return true;
	};

	const handleSubmit = async (
		formValues: Record<string, string>,
		setSubmitting: (arg: boolean) => void,
		resetForm: () => void
	) => {
		setError(false);
		setSuccess(false);

		const res = await fetch('/api/contact/send', {
			body: JSON.stringify(formValues),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		const { error } = await res.json();

		if (!canSubmit(cookie) || error) {
			setError(true);
			setSubmitting(false);
			return;
		}

		setSubmitting(false);
		setSuccess(true);
		setCookie(new Date().toString());
		resetForm();
	};

	const validationSchema = Yup.object({
		firstName: Yup.string().required("Don't be a stranger!"),
		lastName: Yup.string().required("Don't be a stranger!"),
		email: Yup.string()
			.email("That's not a valid email address")
			.required('How am I supposed to reply to you?'),
		company: Yup.string(),
		subject: Yup.mixed()
			.oneOf(subjects, 'Please select an option')
			.required('Please select an option'),
		message: Yup.string().required('Please enter a message'),
	});

	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				company: '',
				subject: '',
				message: '',
			}}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				handleSubmit(values, setSubmitting, resetForm);
			}}
		>
			{({ isSubmitting, values }) => {
				const isRecruiter =
					values.subject === 'I am a recruiter and want to hire you';

				return (
					<Form role="form" className="mt-4">
						<Box>
							{success && (
								<div className="rounded-md bg-green-100 px-4 py-2 font-bold text-green-600 ring-1 ring-green-600">
									Thanks for your message. I will get back to you as soon as I
									can.
								</div>
							)}
							{error && (
								<div className="rounded-md bg-red-100 px-4 py-2 font-bold text-red-600 ring-1 ring-red-600">
									Something went wrong, please try again!
								</div>
							)}
							{isRecruiter ? (
								<p className="font-bold text-red-600">
									Please visit the{' '}
									<Link href="/recruiters" className="underline">
										Recruiter Information page
									</Link>{' '}
									for more information and a sign up form.
								</p>
							) : (
								<>
									<Input label="First Name" placeholder="John" id="firstName" />
									<Input label="Last Name" placeholder="Doe" id="lastName" />
									<Input label="Company" id="company" />
									<Input
										label="Email Address"
										placeholder="johndoe@gmail.com"
										id="email"
										type="email"
									/>
									<Select label="Subject" id="subject" options={subjects} />

									<TextArea label="Message" id="message" />

									<div className="mt-6">
										<Button
											type="submit"
											disabled={
												isSubmitting || isRecruiter || !canSubmit(cookie)
											}
											className="group"
										>
											{isSubmitting ? 'Loading ...' : 'Send Message'}
										</Button>
									</div>
								</>
							)}
						</Box>
					</Form>
				);
			}}
		</Formik>
	);
};
