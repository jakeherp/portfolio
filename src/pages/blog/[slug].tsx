import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import React from 'react';
import styled from 'styled-components';
import { getAllDocuments, getBySlug } from 'Utils/api';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import format from 'date-fns/format';
import { List } from 'Atoms/List';

export default function BlogPost({ post, mdxSource }: any) {
	const { title, description, date, tags } = post;

	const components = {
		img: (props: any) => (
			<Image {...props} width={1920} height={1080} objectFit="cover" />
		),
		ul: (props: any) => <List {...props} />,
	};

	return (
		<>
			<SeoHead
				title={`${title} - Jacob Herper's Blog - Front-End Software Engineer`}
				description={description}
			/>
			<Container>
				<Headline>{title}</Headline>
				<MDXRemote {...mdxSource} components={components} />
				<Flex>
					<Text>
						<em>Written on {format(new Date(date), 'd MMMM yyyy')}</em>
					</Text>
					<Text>
						<strong>Tags:</strong>
						<Tags>
							{tags.map((tag: string) => (
								<li key={tag}>#{tag}</li>
							))}
						</Tags>
					</Text>
				</Flex>
			</Container>
		</>
	);
}

export async function getStaticProps({ params }: any) {
	const post = getBySlug('BLOG', params.slug, [
		'title',
		'description',
		'slug',
		'tags',
		'date',
		'content',
	]);

	if (!post?.content) return {};

	const mdxSource = await serialize(post.content);

	return {
		props: { post, mdxSource },
	};
}

export async function getStaticPaths() {
	const posts = getAllDocuments('BLOG', ['slug']);

	return {
		paths: posts.map((post) => {
			return {
				params: { ...post },
			};
		}),
		fallback: false,
	};
}

const Headline = styled.h2`
	font-size: 2rem;
	margin-bottom: 0;

	@media screen and (min-width: 768px) {
		font-size: 3rem;
	}
`;

const Text = styled.p`
	margin-top: 3rem 0;
	display: flex;
	align-items: baseline;
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const Tags = styled.ul`
	display: flex;
	flex-wrap: wrap;
	color: ${({ theme }) => theme.grey};

	li {
		margin-left: 1rem;
		font-size: 0.9rem;
	}
`;
