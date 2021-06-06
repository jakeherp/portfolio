import { IPost } from '@Types/post';
import { BlogPost } from 'Atoms/BlogPost';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import React from 'react';
import styled from 'styled-components';
import { getAllBlogPosts } from 'Utils/api';
import orderBy from 'lodash.orderby';

export default function Blog({ posts }: any) {
	return (
		<>
			<SeoHead
				title="Jacob Herper's Blog - Front-End Software Engineer"
				description="I try to make an effort to document my journey as a software engineer in the form of blog posts. Here you find some of the articles I published over the years."
			/>
			<Container>
				<Headline>Blog</Headline>
				{posts.map((post: any) => (
					<BlogPost post={post} key={post.slug} />
				))}
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const posts = getAllBlogPosts([
		'title',
		'description',
		'slug',
		'tags',
		'date',
	]);

	const sortedPosts = orderBy(posts, ['date'], ['desc']);

	return {
		props: { posts: sortedPosts },
	};
}

const Headline = styled.h2`
	font-size: 2rem;
	margin-bottom: 0;

	@media screen and (min-width: 768px) {
		font-size: 3rem;
	}
`;
