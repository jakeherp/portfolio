import { School } from '../School';

import { mockSchool } from '@mockdata';
import { render } from '@testing-library/react';

describe('School', () => {
	it('renders correctly', () => {
		const { container } = render(<School {...mockSchool} />);
		expect(container).toMatchSnapshot();
	});
});
