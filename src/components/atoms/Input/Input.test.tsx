import { Input } from '../Input';

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

describe('Input', () => {
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
