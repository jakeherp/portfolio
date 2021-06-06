import { PortfolioItem } from '../PortfolioItem';
import { render } from '@testing-library/react';

describe('PortfolioItem', () => {
	const mockItem = {
		slug: 'amvi',
		title: 'Amamos Vivir Cada Día',
		link: 'https://www.amvi.org.mx/',
		type: 'Web Development',
		technologies: [
			'Gatsby',
			'TypeScript',
			'Styled-Components',
			'REST APIs',
			'GraphQL',
		],
		content: 'Some text content',
	};

	it('renders correctly', () => {
		const { container } = render(<PortfolioItem item={mockItem} />);
		expect(container).toMatchSnapshot();
	});
});
