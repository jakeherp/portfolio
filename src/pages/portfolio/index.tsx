import styled from 'styled-components';
import { getAllDocuments } from 'Utils/api';
import orderBy from 'lodash.orderby';

import { Container } from 'Atoms/Container';
import { PortfolioItem } from 'Atoms/PortfolioItem';
import { SeoHead } from 'Atoms/SeoHead';

export default function Blog({ portfolioItems }: any) {
	return (
		<>
			<SeoHead
				title="Jacob Herper's Portfolio - Front-End Software Engineer"
				description="Front-End Software Engineer with a focus on JavaScript and React.js. I have more than 10 years experience working in software engineering."
			/>
			<Container>
				<Headline>Portfolio</Headline>
				{portfolioItems.map((item: any) => (
					<PortfolioItem item={item} key={item.slug} />
				))}
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const portfolioItems = getAllDocuments('PORTFOLIO', [
		'title',
		'slug',
		'type',
		'technologies',
		'sortOrder',
	]);

	const sortedItems = orderBy(portfolioItems, ['sortOrder'], ['desc']);

	return {
		props: { portfolioItems: sortedItems },
	};
}

const Headline = styled.h2`
	font-size: 2rem;
	margin-bottom: 3rem;

	@media screen and (min-width: 768px) {
		font-size: 3rem;
	}
`;
