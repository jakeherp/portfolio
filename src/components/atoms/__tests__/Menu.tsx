import React from 'react';
import renderer from 'react-test-renderer';

import Menu from '../Menu';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Menu>
        <div />
      </Menu>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
