import { Header } from '../Header';
import { render } from '@testing-library/react';

jest.mock('Atoms/NavigationItem');

describe('Header', () => {
	it('renders correctly', () => {
		const { container } = render(<Header />);
		expect(container).toMatchSnapshot();
	});
});
