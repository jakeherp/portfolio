import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';

// Todo: Fix test
it.skip('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
