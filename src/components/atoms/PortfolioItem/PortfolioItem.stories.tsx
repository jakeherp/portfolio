import { PortfolioItem, PortfolioItemProps } from './PortfolioItem';

export default {
	title: 'atoms/PortfolioItem',
	component: PortfolioItem,
};

export const PortfolioItemStory = (args: PortfolioItemProps) => (
	<PortfolioItem {...args} />
);

PortfolioItemStory.storyName = 'PortfolioItem';
PortfolioItemStory.args = {
	item: {
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
	},
};
