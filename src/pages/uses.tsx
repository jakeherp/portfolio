import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import Markdown from 'react-markdown';
import { NextPage } from 'next';

import { Container } from 'Atoms/Container';
import { mdxComponents } from 'utils/mdxComponents';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	markdown: string;
}

const UsesPage: NextPage<IProps> = ({ markdown }) => {
	return (
		<>
			<SeoHead
				title="Jacob Herper uses ..."
				description="This is a comprehensive list of tech equipment and software I use for my day-to-day work as a software engineer in the UK."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">Uses</h1>
				<Markdown components={mdxComponents}>{markdown}</Markdown>
			</Container>
		</>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query UsesPageQuery {
				page(where: { slug: "uses" }) {
					content {
						markdown
					}
				}
			}
		`,
	});

	return {
		props: {
			markdown: data.page.content.markdown,
		},
	};
}

export default UsesPage;
