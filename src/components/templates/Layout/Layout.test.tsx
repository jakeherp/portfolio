import { Layout } from '../Layout';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
	__esModule: true,
	useRouter: jest.fn().mockReturnValue({
		route: '',
		pathname: '',
		query: '',
		asPath: '',
	}),
}));

describe('Layout', () => {
	(useRouter as jest.Mock).mockReturnValue({
		asPath: '',
	});

	it('renders correctly', () => {
		const { container } = render(<Layout>Some content</Layout>);
		expect(container).toMatchSnapshot();
	});
});
