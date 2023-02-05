import { render } from '@testing-library/react';
import { ThemeToggle } from '../ThemeToggle';

describe('ThemeToggle', () => {
	it('renders correctly', () => {
		const { container } = render(<ThemeToggle />);
		expect(container).toMatchSnapshot();
	});
});
