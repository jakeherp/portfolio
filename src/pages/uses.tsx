import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { mdxComponents } from 'Utils/mdxComponents';
import { NextPage } from 'next';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	markdown: RichTextContent;
}

const UsesPage: NextPage<IProps> = ({ markdown }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="Jacob Herper uses ..."
				description="This is a comprehensive list of tech equipment and software I use for my day-to-day work as a software engineer in the UK."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">Uses</h1>
				<RichText content={markdown} renderers={mdxComponents} />
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query UsesPageQuery {
				page(where: { slug: "uses" }) {
					content {
						raw
					}
				}
			}
		`,
	});

	return {
		props: {
			markdown: data.page.content.raw,
		},
	};
}

export default UsesPage;
