import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { ContentBlock } from '@components/atoms/ContentBlock';

import { sanityClient } from '@lib/sanity';

import { postsQuery } from '@queries/posts';

import type { Post } from '@types';
import { format } from 'date-fns';

export const metadata = {
	title: 'Software Engineering Blog by Jacob Herper',
	description:
		'I try to make an effort to document my journey as a software developer in the form of blog posts. Here you find some of the articles I published over the years.',
};

const getData = async () => {
	const posts: Post[] = await sanityClient.fetch(postsQuery());

	return posts;
};

const BlogPage = async () => {
	const posts = await getData();

	return (
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 pb-8 text-3xl md:text-5xl lg:text-6xl">
					Blog
				</h1>
				{posts.map((post) => {
					return (
						<article key={post.slug} className="mb-16">
							<h2 className="mb-2 text-xl font-bold md:text-2xl lg:text-3xl">
								<a href={`/blog/${post.slug}`}>{post.title}</a>
							</h2>
							<ContentBlock value={post.intro} />
							<em className="mt-2 block">
								Published on{' '}
								{format(new Date(post.publishedAt), 'do MMMM yyyy - HH:mm')}
							</em>
						</article>
					);
				})}
			</Container>
		</AnimatePage>
	);
};

export default BlogPage;
