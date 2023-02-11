import { Salary } from '../Salary';

import { fireEvent, render, waitFor } from '@testing-library/react';

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

	it('switches the emoji when changing the range', async () => {
		const { getByTestId } = render(<Salary salaryRange={testRange} />);
		const rangeInput = getByTestId('salaryRange');
		const emoji = getByTestId('emoji');
		expect(emoji).toHaveAccessibleDescription('getting there');

		fireEvent.change(rangeInput, { target: { value: '70000' } });
		await waitFor(() => {
			expect(emoji).toHaveAccessibleDescription(/are you serious?/i);
		});

		fireEvent.change(rangeInput, { target: { value: '90000' } });
		expect(emoji).toHaveAccessibleDescription(/way too low/i);

		fireEvent.change(rangeInput, { target: { value: '95000' } });
		expect(emoji).toHaveAccessibleDescription(/too low/i);

		await waitFor(() => {
			fireEvent.change(rangeInput, { target: { value: '110000' } });
		});
		expect(emoji).toHaveAccessibleDescription(/getting there/i);

		fireEvent.change(rangeInput, { target: { value: '115000' } });
		expect(emoji).toHaveAccessibleDescription(/pretty good/i);

		fireEvent.change(rangeInput, { target: { value: '125000' } });
		expect(emoji).toHaveAccessibleDescription(/great/i);

		fireEvent.change(rangeInput, { target: { value: '200000' } });
		expect(emoji).toHaveAccessibleDescription(/make it rain!/i);
	});
});
