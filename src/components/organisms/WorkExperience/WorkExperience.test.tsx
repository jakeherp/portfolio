import { mockJobs } from 'MockData';
import { render } from '@testing-library/react';
import { WorkExperience } from '../WorkExperience';

jest.mock('react-markdown', () => ({
	__esModule: true,
	default: ({ children }: any) => <>{children}</>,
}));

describe('WorkExperience', () => {
	it('renders correctly', () => {
		const { container } = render(<WorkExperience jobs={[mockJobs[0]]} />);
		expect(container).toMatchSnapshot();
	});
});
