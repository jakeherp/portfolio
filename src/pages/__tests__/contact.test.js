import React from 'react';
import * as Gatsby from 'gatsby';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Contact from '../contact';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      description: '',
      title: 'Contact',
      lang: 'en',
      meta: [],
      keywords: [],
    },
  },
}));

test('renders correctly', () => {
  const { container } = render(<Contact />);
  expect(container.firstChild).toMatchSnapshot();
});
