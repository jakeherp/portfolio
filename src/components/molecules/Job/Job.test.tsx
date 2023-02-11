import { Job } from '../Job';

import { mockJobs } from '@mockdata';
import { render } from '@testing-library/react';

describe('Job', () => {
	it('renders correctly', () => {
		const { container } = render(<Job {...mockJobs[0]}>Some body</Job>);
		expect(container).toMatchSnapshot();
	});
});
