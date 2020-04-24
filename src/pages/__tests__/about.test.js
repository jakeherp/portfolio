import React from 'react';
import * as Gatsby from 'gatsby';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import About from '../about';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      description: '',
      title: 'About',
      lang: 'en',
      meta: [],
      keywords: [],
    },
  },
}));

test('renders correctly', () => {
  const { container } = render(<About />);
  expect(container.firstChild).toMatchSnapshot();
});
