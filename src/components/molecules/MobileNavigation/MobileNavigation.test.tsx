import { MobileNavigation } from '../MobileNavigation';
import { render } from '@testing-library/react';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch,
}));

describe('MobileNavigation', () => {
	it('renders correctly', () => {
		const { container } = render(<MobileNavigation />);
		expect(container).toMatchSnapshot();
	});
});
