import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import { Box } from 'Atoms/Box';
import { Button } from 'Atoms/Button';
import { Input } from 'Atoms/Input';
import { Select } from 'Atoms/Select';

export interface RecruiterFormProps {
	handleSubmit: (
		values: Record<string, string>,
		setSubmitting: (isSubmitting: boolean) => void,
		resetForm: () => void
	) => void;
	success: boolean;
	error: boolean;
}

export const RecruiterForm = ({
	handleSubmit,
	success,
	error,
}: RecruiterFormProps) => {
	const typeOptions = [
		'I am an in-house recruiter',
		'I work for a recruitment firm',
		'I am an independent recruiter',
		'None of the above',
	];
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
							<div className="bg-green-100 px-4 py-2 text-green-600 ring-1 ring-green-600 font-bold rounded-md">
								Thanks for signing up to my mailing list! I&apos;ll reach out as
								soon as I&apos;m ready for my next position.
							</div>
						)}
						{error && (
							<div className="bg-red-100 px-4 py-2 text-red-600 ring-1 ring-red-600 font-bold rounded-md">
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
								<div className="block headline group-hover:text-off-white">
									{isSubmitting ? 'Loading ...' : 'Sign up'}
								</div>
							</Button>
						</div>
					</Box>
				</Form>
			)}
		</Formik>
	);
};
