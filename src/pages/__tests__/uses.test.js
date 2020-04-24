import React from 'react';
import * as Gatsby from 'gatsby';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Uses from '../uses';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      description: '',
      title: 'Uses',
      lang: 'en',
      meta: [],
      keywords: [],
    },
  },
}));

test('renders correctly', () => {
  const { container } = render(<Uses />);
  expect(container.firstChild).toMatchSnapshot();
});
