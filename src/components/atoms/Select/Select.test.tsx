import { Select } from '../Select';

import { render } from '@testing-library/react';

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

describe('Select', () => {
	it('renders correctly', () => {
		const { container } = render(
			<Select label="Some select" id="some-select" options={['1', '2', '3']} />
		);
		expect(container).toMatchSnapshot();
	});
});
