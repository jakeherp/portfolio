import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { ContentBlock } from '@components/atoms/ContentBlock';

import { sanityClient } from '@lib/sanity';

import { postsQuery } from '@queries/posts';
import { Post } from '@types';
import { groq } from 'next-sanity';

interface PageProps {
	params: {
		slug: string;
	};
}

const getData = async (slug: string) => {
	const post: [Post] = await sanityClient.fetch(postsQuery(slug));

	return post[0];
};

export const generateMetadata = async ({ params }: PageProps) => {
	const post = await getData(params.slug);
	return {
		title: `${post.title} - Jacob Herper's Blog`,
		description: post.seoDescription,
	};
};

const BlogPostPage = async ({ params }: PageProps) => {
	const { slug } = params;
	const post = await getData(slug);

	return (
		<AnimatePage>
			<Container>
				<article className="lg:w-2/3 mx-auto">
					<h1 className="headline text-3xl md:text-4xl lg:text-5xl pb-8 mt-8">
						{post.title}
					</h1>
					<ContentBlock value={post.body} />
				</article>
			</Container>
		</AnimatePage>
	);
};

export default BlogPostPage;

// export const generateStaticParams = async () => {
// 	const query = groq`
// 		*[_type == 'post'] {
// 			"slug": slug.current
// 		}
// 	`;

// 	const slugs: Pick<Post, 'slug'>[] = await sanityClient.fetch(query);
// 	console.log(
// 		'slugs.map(({ slug }) => slug)',
// 		slugs.map(({ slug }) => slug)
// 	);

// 	return slugs.map(({ slug }) => slug);
// };
