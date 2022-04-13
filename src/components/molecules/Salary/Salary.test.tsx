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
});
