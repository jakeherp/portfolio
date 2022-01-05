import { Education } from '../Education';
import { mockSchool } from 'MockData';
import { render } from '@testing-library/react';

describe('Education', () => {
	it('renders correctly', () => {
		const { container } = render(<Education education={[mockSchool]} />);
		expect(container).toMatchSnapshot();
	});
});
