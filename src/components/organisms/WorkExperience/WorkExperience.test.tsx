import { WorkExperience } from '../WorkExperience';

import { mockJobs } from '@mockdata';
import { render } from '@testing-library/react';

jest.mock('@components/atoms/ContentBlock', () => ({
	ContentBlock: () => <div id="contentBlock" />,
}));

describe('WorkExperience', () => {
	it('renders correctly', () => {
		const { container } = render(<WorkExperience jobs={[mockJobs[0]]} />);
		expect(container).toMatchSnapshot();
	});
});
