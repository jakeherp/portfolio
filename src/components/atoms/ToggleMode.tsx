import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import Moon from 'Assets/images/moon.svg';
import Sun from 'Assets/images/sun.svg';

const ToggleMode = () => (
  <Wrapper>
    <ThemeConsumer>
      {(theme) =>
        theme.mode === 'dark' ? (
          <Sun
            onClick={() => theme.setTheme({ ...theme, mode: 'light' })}
            role="button"
            aria-label="Light Mode"
            data-testid="lightMode"
          />
        ) : (
          <Moon
            onClick={() => theme.setTheme({ ...theme, mode: 'dark' })}
            role="button"
            aria-label="Dark Mode"
            data-testid="darkMode"
          />
        )
      }
    </ThemeConsumer>
  </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  right: 1rem;
  cursor: pointer;
`;

export default ToggleMode;
