import React from 'react';
import * as Gatsby from 'gatsby';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import SeoHelmet from '../Seo';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'Exercitation quis excepteur',
      description: 'Ex magna ipsum consectetur anim labore.',
      lang: 'en',
    },
  },
}));

test('renders correctly', () => {
  const { container } = render(<SeoHelmet title="Title" />);
  expect(container.firstChild).toMatchInlineSnapshot(`null`);
});
