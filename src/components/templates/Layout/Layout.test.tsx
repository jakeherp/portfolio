import { Layout } from '../Layout';
import { render } from '@testing-library/react';

jest.mock('next/router', () => ({
	useRouter: jest.fn().mockReturnValue({
		asPath: '/',
	}),
}));

describe('Layout', () => {
	it('renders correctly', () => {
		const { container } = render(<Layout title="Some title" />);
		expect(container).toMatchSnapshot();
	});
});
