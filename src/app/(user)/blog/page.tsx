import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { ContentBlock } from '@components/atoms/ContentBlock';

import { sanityClient } from '@lib/sanity';

import { postsQuery } from '@queries/posts';
import { Post } from '@types';

const getData = async () => {
	const posts: Post[] = await sanityClient.fetch(postsQuery());

	return posts;
};

const BlogPage = async () => {
	const posts = await getData();

	return (
		<AnimatePage>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
					Blog
				</h1>
				{posts.map((post) => {
					return (
						<article key={post.slug} className="mb-16">
							<h2 className="text-xl font-bold md:text-2xl lg:text-3xl mb-2">
								<a href={`/blog/${post.slug}`}>{post.title}</a>
							</h2>
							<ContentBlock value={post.intro} />
							<em className="block mt-2">Published on {post.publishedAt}</em>
						</article>
					);
				})}
			</Container>
		</AnimatePage>
	);
};

export default BlogPage;
