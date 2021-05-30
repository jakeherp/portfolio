import { Layout } from '../Layout';
import { render } from '@testing-library/react';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch,
}));

describe('Layout', () => {
	it('renders correctly', () => {
		const { container } = render(<Layout />);
		expect(container).toMatchSnapshot();
	});
});
