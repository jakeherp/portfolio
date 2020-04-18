import React from 'react';
import renderer from 'react-test-renderer';

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

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Job
        title={job.title}
        company={job.company}
        place={job.place}
        from={job.from}
        to={job.to}
      >
        List of tasks
      </Job>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
