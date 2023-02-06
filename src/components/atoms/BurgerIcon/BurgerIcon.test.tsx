import { BurgerIcon } from '../BurgerIcon';

import { render } from '@testing-library/react';

describe('BurgerIcon', () => {
	it('renders correctly', () => {
		const { container } = render(<BurgerIcon isOpen={false} />);
		expect(container).toMatchSnapshot();
	});
});
