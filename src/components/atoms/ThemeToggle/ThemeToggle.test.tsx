import { render } from '@testing-library/react';
import { ThemeToggle } from '../ThemeToggle';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch,
}));

describe('ThemeToggle', () => {
	it('renders correctly', () => {
		const { container } = render(<ThemeToggle />);
		expect(container).toMatchSnapshot();
	});
});
