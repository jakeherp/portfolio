import { Education } from '../Education';
import { render } from '@testing-library/react';

describe('Education', () => {
	it('renders correctly', () => {
		const { container } = render(
			<Education
				education={{
					institute: 'Harvard X',
					website: 'https://cs50.harvard.edu/x/',
					course: 'CS50',
					endDate: '2020-06-20',
					place: 'remote',
					technologies: ['C', 'Python', 'SQL', 'Algorithms', 'Data Structures'],
				}}
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
