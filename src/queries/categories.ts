import { groq } from 'next-sanity';

export const categoriesQuery = groq`
*[_type == "category"] {
  title
}
`;
