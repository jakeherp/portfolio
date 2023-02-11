import { groq } from 'next-sanity';

export const authorsQuery = (slug?: string) => groq`
*[_type == "author"${slug ? ` && slug.current == "${slug}"` : ''}] {
  name,
  bio,
  "image": image.asset->.url,
  "slug": slug.current
}
`;
