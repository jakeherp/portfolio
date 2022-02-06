import { client } from 'apollo-client';
import format from 'date-fns/format';
import { gql } from '@apollo/client';
import { IBlogPost } from '@types';
import Markdown from 'react-markdown';
import { NextPage } from 'next';

import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

import { mdxComponents } from 'utils/mdxComponents';

interface IProps {
	title: string;
	content: string;
	seoDescription: string;
	publishedDate: string;
	slug: string;
}

const PostPage: NextPage<IProps> = ({
	title,
	content,
	seoDescription,
	publishedDate,
}) => {
	const numOfWords = content.split(' ').length;
	const readTime = Math.ceil(numOfWords / 250);

	return (
		<>
			<SeoHead
				title={`${title} - Jacob Herper's Blog`}
				description={seoDescription}
			/>
			<Container>
				<h1 className="headline text-3xl md:text-4xl lg:text-5xl mt-8">
					{title}
				</h1>
				<p className="my-8 flex justify-between text-sm md:text-md">
					<em>~{readTime} minute read</em>
					<span>
						Written on {format(new Date(publishedDate), 'do MMM yyyy')}
					</span>
				</p>
				<Markdown components={mdxComponents}>{content}</Markdown>
			</Container>
		</>
	);
};

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query PostsQuery {
				blogs {
					slug
					title
				}
			}
		`,
	});

	return {
		paths: data.blogs.map(({ slug }: IBlogPost) => ({
			params: { slug },
		})),
		fallback: false,
	};
}

type Params = {
	params: { slug: IBlogPost['slug'] };
};

export async function getStaticProps({ params }: Params) {
	const { data } = await client.query({
		query: gql`
			query PostPageQuery($slug: String!) {
				blog(where: { slug: $slug }) {
					content {
						markdown
					}
					seoDescription
					publishedDate
					slug
					title
				}
			}
		`,
		variables: { slug: params.slug },
	});

	return {
		props: {
			content: data.blog.content.markdown,
			publishedDate: data.blog.publishedDate,
			slug: data.blog.slug,
			title: data.blog.title,
			seoDescription: data.blog.seoDescription,
		},
	};
}

export default PostPage;
