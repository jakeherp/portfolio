import { groq } from 'next-sanity';

export const caseStudiesQuery = (slug?: string) => groq`
*[_type == "caseStudy"${
	slug ? ` && slug.current == "${slug}"` : ''
}] | order(publishedAt desc) {
  client-> {
    name,
    url,
    "logo": logo.asset->.url,
  },
  "mainImage": mainImage.asset->.url,
  "secondaryImages": secondaryImages[].asset->.url,
  publishedAt,
  seoDescription,
  "skills": skills[]->.title,
  "slug": slug.current,
  title,
  url,
  body,
}
`;
