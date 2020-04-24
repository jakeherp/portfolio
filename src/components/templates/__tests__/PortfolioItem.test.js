import React from 'react';
import renderer from 'react-test-renderer';

import PortfolioItem from '../PortfolioItem';

// Todo: fix test
it.skip('renders correctly', () => {
  const data = {
    contentfulItem: {
      title: 'string',
      description: 'string',
      featured_image: {
        fluid: 'any',
      },
      type: 'string',
      content: {
        json: 'any',
      },
      technologies: ['string'],
      url: 'string',
    },
  };

  // const documentToReactComponents = jest.fn();

  const pageContext = {
    slug: 'slug',
    previous: null,
    next: null,
  };

  const tree = renderer
    .create(<PortfolioItem data={data} pageContext={pageContext} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
