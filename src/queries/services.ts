import { groq } from 'next-sanity';

export const servicesQuery = groq`
*[_type == "service"] {
  title,
  slug,
  subtitle,
  body,
  "image": image.asset->url,
}
`;
