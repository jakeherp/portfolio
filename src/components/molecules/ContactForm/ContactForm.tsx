'use client';

import { Box } from '@components/atoms/Box';
import { Button } from '@components/atoms/Button';
import { Input } from '@components/atoms/Input';
import { Select } from '@components/atoms/Select';

import { useCookie } from '@hooks/useCookie';

import classNames from 'classnames';
import { FieldValues, useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

interface Inputs {
	firstName: string;
	lastName: string;
	email: string;
	company: string;
	subject: string;
	message: string;
}

const canSubmit = (cookie: string) => {
	if (!cookie || cookie === '') return true;

	const date = new Date(cookie);
	const now = new Date();

	if (date.getTime() + 60_000 * 60 * 60 * 24 > now.getTime()) {
		return false;
	}

	return true;
};

export const ContactForm = () => {
	const {
		formState: { errors, isLoading, isSubmitted, isSubmitSuccessful },
		handleSubmit,
		register,
		reset,
		watch,
	} = useForm<Inputs>();
	const [cookie, setCookie] = useCookie('contactFormSubmission', '');

	const subjects = [
		'I need a website / app developed',
		'Feedback on this website',
		'General Inquiry',
		'I am a recruiter and want to hire you',
		'Other',
	];

	const onSubmit: SubmitHandler<FieldValues> = async (formValues) => {
		if (!canSubmit(cookie)) return;

		const res = await fetch('/api/contact/send', {
			body: JSON.stringify(formValues),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		const { error } = await res.json();

		setCookie(new Date().toString());
		reset();
	};

	const message = watch('message');

	return (
		<>
			{isSubmitSuccessful && (
				<div className="bg-emerald-200 border-emerald-500 text-emerald-900 p-4 my-4 rounded-lg">
					Thank you for your message, I&apos;ll be in touch shortly!
				</div>
			)}
			<Box className="mt-8">
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
					<Input
						id="firstName"
						label="First Name"
						isRequired
						error={errors.firstName?.message}
						{...register('firstName', { required: "Don't be a stranger!" })}
					/>
					<Input
						id="lastName"
						label="Last Name"
						isRequired
						error={errors.lastName?.message}
						{...register('lastName', { required: "Don't be a stranger!" })}
					/>
					<Input
						id="email"
						label="Email"
						isRequired
						error={errors.email?.message}
						{...register('email', {
							required: 'Please enter an email address',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "That's not a valid email address",
							},
						})}
					/>
					<Input
						id="company"
						label="Company"
						error={errors.company?.message}
						{...register('company')}
					/>
					<Select
						{...register('subject', {
							required: 'Please select a subject',
							value: '',
						})}
						id="subject"
						label="Subject"
						isRequired
						error={errors.subject?.message}
						options={subjects.map((subject) => ({
							value: subject,
							label: subject,
						}))}
						placeholder="Please choose a subject"
					/>

					<div className="relative w-full flex flex-col gap-1">
						<label htmlFor="message" className="font-bold">
							Message <span className="text-red-700">*</span>
						</label>
						<textarea
							id="message"
							{...register('message', {
								required: 'Please enter a message',
								minLength: {
									value: 100,
									message: 'Please enter at least 100 characters',
								},
							})}
							className={classNames(
								'my-2 rounded-md h-48 px-4 py-2 ring-1 dark:bg-transparent',
								{
									'ring-red-600': errors.message,
									'ring-grey-400 dark:ring-slate-500': !errors.message,
								}
							)}
						/>
						{message && (
							<div
								className={classNames('absolute text-sm right-6 text-right', {
									'text-red-600': message?.length < 100,
									'bottom-10': errors.message,
									'bottom-4': !errors.message,
								})}
							>
								{message?.length}
							</div>
						)}
						{errors.message && (
							<div className="font-sm font-normal -mt-2 text-red-600">
								{errors.message.message}
							</div>
						)}
					</div>
					<Button type="submit" disabled={isLoading || isSubmitted}>
						{isLoading || isSubmitted ? 'Loading ...' : 'Send'}
					</Button>
				</form>
			</Box>
		</>
	);
};
