import { Job } from '../Job';
import { mockJobs } from 'MockData';
import { render } from '@testing-library/react';

describe('Job', () => {
	it('renders correctly', () => {
		const { container } = render(<Job {...mockJobs[0]} />);
		expect(container).toMatchSnapshot();
	});
});
