import { Header } from '../Header';
import { render } from '@testing-library/react';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch,
}));

describe('Header', () => {
	it('renders correctly', () => {
		const { container } = render(<Header />);
		expect(container).toMatchSnapshot();
	});
});
