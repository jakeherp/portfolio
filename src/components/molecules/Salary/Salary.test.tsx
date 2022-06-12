import { Salary } from '../Salary';
import { fireEvent, render } from '@testing-library/react';

describe('Salary', () => {
	const testRange = {
		minimum: 100000,
		median: 150000,
		maximum: 200000,
	};

	it('renders correctly', () => {
		const { container } = render(<Salary salaryRange={testRange} />);
		expect(container).toMatchSnapshot();
	});

	it('switches the emoji when changing the range', () => {
		const { getByTestId } = render(<Salary salaryRange={testRange} />);
		const rangeInput = getByTestId('salaryRange');
		const emoji = getByTestId('emoji');
		expect(emoji).toHaveAccessibleDescription('way too low');

		fireEvent.change(rangeInput, { target: { value: '75000' } });
		expect(emoji).toHaveAccessibleDescription('too low');

		fireEvent.change(rangeInput, { target: { value: '85000' } });
		expect(emoji).toHaveAccessibleDescription('low');

		fireEvent.change(rangeInput, { target: { value: '95000' } });
		expect(emoji).toHaveAccessibleDescription('you can do better');

		fireEvent.change(rangeInput, { target: { value: '95000' } });
		expect(emoji).toHaveAccessibleDescription('you can do better');

		fireEvent.change(rangeInput, { target: { value: '100000' } });
		expect(emoji).toHaveAccessibleDescription('getting there');

		fireEvent.change(rangeInput, { target: { value: '115000' } });
		expect(emoji).toHaveAccessibleDescription('pretty good');

		fireEvent.change(rangeInput, { target: { value: '125000' } });
		expect(emoji).toHaveAccessibleDescription('great');

		fireEvent.change(rangeInput, { target: { value: '200000' } });
		expect(emoji).toHaveAccessibleDescription('make it rain!');
	});
});
