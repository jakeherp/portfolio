import { MobileMenu } from '../MobileMenu';

import { render } from '@testing-library/react';
import type { PropsWithChildren } from 'react';

jest.mock('next/router', () => ({
	__esModule: true,
	useRouter: jest.fn().mockReturnValue({
		route: '',
		pathname: '',
		query: '',
		asPath: '',
	}),
}));

jest.mock('focus-trap-react', () => ({
	__esModule: true,
	default: ({ children }: PropsWithChildren) => (
		<div id="focus-trap">{children}</div>
	),
}));

describe('MobileMenu', () => {
	it('renders correctly', () => {
		const { container } = render(<MobileMenu isOpen={true} />);
		expect(container).toMatchSnapshot();
	});
});
