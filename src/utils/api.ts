import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { IPost } from '@Types/post';

const blogPostsDirectory = join(process.cwd(), 'src/blog');

export function getBlogPostSlugs() {
	return fs.readdirSync(blogPostsDirectory);
}

export function getBlogPostBySlug(slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.mdx$/, '');
	const fullPath = join(blogPostsDirectory, `${realSlug}.mdx`);
	try {
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		const { data, content } = matter(fileContents);
		const items: IPost | Record<string, string> = {};
		fields.forEach((field) => {
			if (field === 'slug') {
				items[field] = realSlug;
			}
			if (field === 'content') {
				items[field] = content;
			}
			if (data[field]) {
				items[field] = data[field];
			}
		});

		return items;
	} catch {
		return null;
	}
}

export function getAllBlogPosts(fields: string[] = []) {
	const slugs = getBlogPostSlugs();
	const blogPosts = slugs.map((slug) => getBlogPostBySlug(slug, fields));

	return blogPosts;
}
