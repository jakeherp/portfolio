import { groq } from 'next-sanity';

export const jobsQuery = groq`
*[_type == "job"] {
  jobTitle,
  "company": company-> {
    name,
    url,
    "logo": logo.asset->.url,
  },
  description,
  fromDate,
  toDate,
  "skills": skills[]->.title,
}
`;
