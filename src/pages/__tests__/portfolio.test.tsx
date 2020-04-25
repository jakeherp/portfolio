import React from 'react';
import * as Gatsby from 'gatsby';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Portfolio from '../portfolio';

const mockData = {
  allContentfulItem: {
    edges: [
      {
        node: {
          title: 'Portfolio item 1',
          slug: 'portfolio-item-1',
          image: {
            fluid: {
              base64: '',
              aspectRatio: 1.5,
              src: '/',
              srcSet: '/',
              sizes: '(max-width: 800px) 100vw, 800px',
            },
          },
          type: 'item',
        },
      },
      {
        node: {
          title: 'Portfolio item 2',
          slug: 'portfolio-item-2',
          image: {
            fluid: {
              base64: '',
              aspectRatio: 1.5,
              src: '/',
              srcSet: '/',
              sizes: '(max-width: 800px) 100vw, 800px',
            },
          },
          type: 'item',
        },
      },
    ],
  },
};

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      description: '',
      title: 'Portfolio',
      lang: 'en',
      meta: [],
      keywords: [],
    },
  },
}));

test('renders correctly', () => {
  const { container } = render(<Portfolio data={mockData} />);
  expect(container.firstChild).toMatchSnapshot();
});
