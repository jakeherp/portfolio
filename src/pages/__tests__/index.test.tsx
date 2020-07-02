import React from 'react';
import * as Gatsby from 'gatsby';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import IndexPage from '../index';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      description: '',
      title: 'Home page',
      lang: 'en',
      meta: [],
      keywords: [],
    },
  },
}));

test.skip('renders correctly', () => {
  const { container } = render(<IndexPage />);
  expect(container.firstChild).toMatchSnapshot();
});
