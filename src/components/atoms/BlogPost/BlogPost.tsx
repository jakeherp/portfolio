import { FC } from 'react';
import { format } from 'date-fns';
import { IPost } from '@Types';
import Link from 'next/link';
import { Flex, StyledBlogPost, Tags } from './styles';

export interface BlogPostProps {
	post: IPost;
}

const BlogPost: FC<BlogPostProps> = ({
	post: { title, description, slug, date, tags },
}) => {
	return (
		<StyledBlogPost>
			<Link href={`/blog/${slug}`}>
				<a>
					<Flex>
						<h1>{title}</h1>
						<div>{format(new Date(date), 'dd/MM/yyyy')}</div>
					</Flex>
					<p>{description}</p>
					<Tags>
						{tags.map((tag) => (
							<li key={tag}>#{tag}</li>
						))}
					</Tags>
				</a>
			</Link>
		</StyledBlogPost>
	);
};

export { BlogPost };
