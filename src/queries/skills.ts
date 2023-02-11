import { groq } from 'next-sanity';

export const skillsQuery = groq`
*[_type == "skill"] {
  title,
  "category": categories->.title,
}
`;
