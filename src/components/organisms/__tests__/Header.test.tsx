import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Header from '../Header';

const colourTheme = { mode: 'dark' };

test.skip('renders correctly', () => {
  const { container, debug } = render(
    <ThemeProvider theme={colourTheme}>
      <Header />
    </ThemeProvider>
  );
  debug();
  expect(container).toMatchInlineSnapshot();
});
