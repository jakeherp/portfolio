import React from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SEO from '../components/molecules/Seo';
import Container from '../components/atoms/Container';

const Intro = styled.section`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Headline = styled.h1`
  font-size: 3rem;
  margin: 0;

  .accent {
    color: #e94e1b;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0.5rem 0;
`;

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Intro>
      <Container>
        <Headline>
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={[
              "I'm <span class='accent'>Jacob</span> Herper.",
              "I'm a <span class='accent'>web developer</span>.",
              "I'm an <span class='accent'>entrepreneur</span>.",
              "I'm a <span class='accent'>creative</span> mind.",
            ]}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
            className="typed"
          />
        </Headline>
        <Text>
          As a front end web developer with years of experience I create amazing
          websites and web apps to make the internet a better place.{' '}
          <strong>
            <Link to="/contact/">Get in touch</Link>
          </strong>{' '}
          to discuss how we can work together.
        </Text>
      </Container>
    </Intro>
  </>
);

export default IndexPage;
