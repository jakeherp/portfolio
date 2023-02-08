import { groq } from 'next-sanity';

export const postsQuery = (slug?: string) => groq`
*[_type == "post"${
	slug ? ` && slug.current == "${slug}"` : ''
}] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  seoDescription,
  publishedAt,
  "updatedAt": _updatedAt,
  intro,
  body,
}
`;
