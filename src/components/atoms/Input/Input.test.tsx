import { Input } from '../Input';

import { render } from '@testing-library/react';
import { Formik } from 'formik';

const mockField = {
	value: '',
	checked: false,
	onChange: jest.fn(),
	onBlur: jest.fn(),
	multiple: undefined,
	name: 'password',
};
const mockMeta = {
	touched: false,
	error: '',
	initialError: '',
	initialTouched: false,
	initialValue: '',
	value: '',
};

jest.mock('formik', () => ({
	...jest.requireActual('formik'),
	useField: jest.fn(() => {
		return [mockField, mockMeta];
	}),
}));

describe('Input', () => {
	it('renders correctly', () => {
		const { container } = render(
			<Formik
				initialValues={{
					firstName: '',
				}}
				onSubmit={jest.fn()}
				validate={(values) => {
					const errors = {
						firstName: '',
					};

					if (!values?.firstName) {
						errors.firstName = 'Required.';
					}

					return errors;
				}}
			>
				<Input
					label="Some input"
					id="some-input"
					placeholder="Some placeholder"
				/>
			</Formik>
		);

		expect(container).toMatchSnapshot();
	});
});
