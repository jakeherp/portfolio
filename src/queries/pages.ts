import { groq } from 'next-sanity';

export const pagesQuery = (slug?: string) => groq`
*[_type == "page"${slug ? ` && slug.current == "${slug}"` : ''}] {
  title,
  "slug": slug.current,
  seoDescription,
  body,
}
`;
