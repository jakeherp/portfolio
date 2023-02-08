import { groq } from 'next-sanity';

export const companiesQuery = groq`
*[_type == "company"] {
  name,
  url,
  "logo": logo.asset->.url
}
`;
