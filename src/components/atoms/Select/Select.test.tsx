import { render } from '@testing-library/react';
import { Select } from '../Select';
import { useField } from 'formik';

describe('Select', () => {
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
			<Select label="Some select" id="some-select" options={['1', '2', '3']} />
		);
		expect(container).toMatchSnapshot();
	});
});
