import { CaseStudy } from '../CaseStudy';
import { mockCaseStudy } from 'MockData';
import { render } from '@testing-library/react';

describe('CaseStudy', () => {
	it('renders correctly', () => {
		const { container } = render(<CaseStudy {...mockCaseStudy} index={0} />);
		expect(container).toMatchSnapshot();
	});
});
