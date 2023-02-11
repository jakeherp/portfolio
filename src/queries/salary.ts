import { groq } from 'next-sanity';

export const salaryQuery = groq`
*[_type == "salary"] {
  minimum,
  maximum,
  median,
}[0]
`;
