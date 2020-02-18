import React from 'react';
import { ThemeConsumer } from 'styled-components';

import Moon from '../../assets/images/moon.svg';
import Sun from '../../assets/images/sun.svg';

const ToggleMode = () => (
  <ThemeConsumer>
    {theme =>
      theme.mode === 'dark' ? (
        <Sun
          onClick={() => theme.setTheme({ ...theme, mode: 'light' })}
          role="button"
          aria-label="Light Mode"
        />
      ) : (
        <Moon
          onClick={() => theme.setTheme({ ...theme, mode: 'dark' })}
          role="button"
          aria-label="Dark Mode"
        />
      )
    }
  </ThemeConsumer>
);

export default ToggleMode;
