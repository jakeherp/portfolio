import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import Job from '../Job';

const job = {
  title: 'Web Developer',
  company: {
    name: 'My Company',
    url: 'test.com',
  },
  place: 'London',
  from: 'Jan 2010',
  to: 'present',
};

test('renders correctly', () => {
  const { container } = render(
    <Job
      title={job.title}
      company={job.company}
      place={job.place}
      from={job.from}
      to={job.to}
    >
      List of tasks
    </Job>
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      border-bottom: 1px solid;
      padding-bottom: 2rem;
      margin-bottom: 1rem;
      -webkit-break-inside: avoid;
      break-inside: avoid;
    }

    .c0 h1 {
      margin: 0 0 0.5rem;
    }

    .c0 h2 {
      font-weight: normal;
      font-size: 1rem;
      margin: 0 0 0.5rem;
    }

    <article
      class="c0"
      data-testid="jobMyCompany"
    >
      <h1>
        Web Developer
      </h1>
      <h2>
        <strong>
          <a
            href="test.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            My Company
          </a>
        </strong>
         
        (in 
        London
        )
      </h2>
      List of tasks
      <small>
        Jan 2010
         to 
        present
      </small>
    </article>
  `);
});
