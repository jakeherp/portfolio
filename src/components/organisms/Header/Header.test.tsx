import { Header } from '../Header';

import { render } from '@testing-library/react';

jest.mock('@components/atoms/NavigationItem');
jest.mock('next/router', () => ({
	__esModule: true,
	useRouter: jest.fn().mockReturnValue({
		route: '',
		pathname: '',
		query: '',
		asPath: '',
	}),
}));
jest.mock('@components/atoms/Logo');

describe('Header', () => {
	it('renders correctly', () => {
		const { container } = render(<Header />);
		expect(container).toMatchSnapshot();
	});
});
