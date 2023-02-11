import { groq } from 'next-sanity';

export const podcastsQuery = groq`
*[_type == "podcast"] | order(sortOrder asc) {
  name,
  url,
  "logo": logo.asset->.url,
  sortOrder,
}
`;
