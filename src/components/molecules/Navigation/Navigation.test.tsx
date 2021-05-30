import { Navigation } from '../Navigation';
import { render } from '@testing-library/react';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch,
}));

describe('Navigation', () => {
	it('renders correctly', () => {
		const { container } = render(<Navigation />);
		expect(container).toMatchSnapshot();
	});
});
