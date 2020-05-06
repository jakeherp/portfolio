import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import theme from 'styled-theming';

import useTheme from 'Hooks/useTheme';
import Header from 'Organisms/Header';
import Footer from 'Organisms/Footer';

export const getBackground = theme('mode', {
  light: '#d6deeb',
  dark: '#011627',
});

export const getTextColor = theme('mode', {
  light: '#011627',
  dark: '#d6deeb',
});

const duration = 0.5;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    // filter: 'blur(0)',
    transition: {
      duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    // filter: 'blur(1rem)',
    transition: { duration },
  },
};

const Style = createGlobalStyle`
  body {
      background-color: ${getBackground};
      color: ${getTextColor};
      font-family: "brandon-grotesque", sans-serif;
      font-size: 1.25rem;
      margin: 0;
      transition: 0.5s;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: 0.5s;
  }

  .menu-background {
    background: ${getTextColor};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 95vh;
`;

const Main = styled(motion.main).attrs(() => ({
  initial: 'initial',
  variants,
}))`
  /* flex-grow: 1; */
`;

interface IProps {
  children: React.ReactNode;
  location: any;
}

const Layout = ({ children, location }: IProps) => {
  const colourTheme = useTheme();

  return (
    <ThemeProvider theme={colourTheme}>
      <>
        <Style />
        <Wrapper>
          <Header />
          <AnimatePresence>
            <Main
              key={location?.pathname}
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {children}
            </Main>
          </AnimatePresence>
          <Footer />
        </Wrapper>
      </>
    </ThemeProvider>
  );
};

export default Layout;
