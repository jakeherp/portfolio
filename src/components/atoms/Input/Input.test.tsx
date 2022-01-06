import { Input } from '../Input';
import { render } from '@testing-library/react';
import { useField } from 'formik';

describe('Input', () => {
	const mockMeta = {
		touched: false,
		error: '',
		initialError: '',
		initialTouched: false,
		initialValue: '',
		value: '',
	};
	const mockField = {
		value: '',
		checked: false,
		onChange: jest.fn(),
		onBlur: jest.fn(),
		multiple: undefined,
		name: 'password',
	};

	beforeEach(() => {
		(useField as jest.Mock).mockReturnValue([mockField, mockMeta]);
	});

	it('renders correctly', () => {
		const { container } = render(
			<Input
				label="Some input"
				id="some-input"
				placeholder="Some placeholder"
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
