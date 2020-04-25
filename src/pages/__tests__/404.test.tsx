import React from 'react';
import * as Gatsby from 'gatsby';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import ErrorPage from '../404';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      description: '',
      title: '404 page',
      lang: 'en',
      meta: [],
      keywords: [],
    },
  },
}));

test('renders correctly', () => {
  const { container } = render(<ErrorPage />);
  expect(container.firstChild).toMatchSnapshot();
});
