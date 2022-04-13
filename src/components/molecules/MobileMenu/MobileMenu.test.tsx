import { MobileMenu } from '../MobileMenu';
import { render } from '@testing-library/react';

jest.mock('next/router', () => ({
	__esModule: true,
	useRouter: jest.fn().mockReturnValue({
		route: '',
		pathname: '',
		query: '',
		asPath: '',
	}),
}));

describe('MobileMenu', () => {
	it('renders correctly', () => {
		const { container } = render(<MobileMenu isOpen={true} />);
		expect(container).toMatchSnapshot();
	});
});
