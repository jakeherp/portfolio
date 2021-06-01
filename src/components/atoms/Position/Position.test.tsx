import { Position } from '../Position';
import { render } from '@testing-library/react';

describe('Position', () => {
	it('renders correctly', () => {
		const { container } = render(
			<Position
				job={{
					company: 'Holland & Barrett',
					jobTitle: 'Software Development Engineer 2',
					startDate: '2020-08-10',
					endDate: null,
					place: 'Nuneaton, England, United Kingdom',
					description: `* Joined Holland & Barrett as a senior software engineer, first with front-end expertise in the fulfilment squad (alongside six back-end engineers)
* Led hiring process of several further UI engineers across multiple squads
* Tech lead developing a custom-built customer services portal based on React and Next.js using TypeScript and Redux, retiring a third-party solution, saving a 6-digit sum in licence fees
* Increased non-existent test-coverage to 90+%
* Introduced e2e tests using Cypress`,
					technologies: [
						'TypeScript',
						'React',
						'Next.js',
						'Redux',
						'GraphQL',
						'REST API',
						'Jest',
						'Cypress',
					],
				}}
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
