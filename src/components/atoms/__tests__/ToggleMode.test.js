import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { shallow } from '@testing-library/react';
import ToggleMode from '../ToggleMode';

test.skip('renders correctly', () => {
  const shallowWithTheme = (tree, theme) => {
    const context = shallow(<ThemeProvider theme={theme} />)
      .instance()
      .getChildContext();
    return shallow(tree, { context });
  };

  const container = shallowWithTheme(<ToggleMode />, {
    mode: 'dark',
  });
  expect(container.firstChild).toMatchInlineSnapshot();
});
