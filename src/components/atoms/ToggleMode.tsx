import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import Moon from '../../assets/images/moon.svg';
import Sun from '../../assets/images/sun.svg';

const ToggleMode = () => (
  <Wrapper>
    <ThemeConsumer>
      {(theme) =>
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
  </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  right: 1rem;
  cursor: pointer;
`;

export default ToggleMode;
