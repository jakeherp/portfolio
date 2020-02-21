import React from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { Link } from 'gatsby';

import SEO from '../components/molecules/Seo';
import Container from '../components/atoms/Container';

const IndexPage = () => {
  const params = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#303346',
      },
      shape: {
        type: 'polygon',
        stroke: {
          width: 0,
          color: 'rgba(255,255,255,0.1)',
        },
        polygon: {
          nb_sides: 6,
        },
      },
      opacity: {
        value: 0.1,
        random: true,
        anim: {
          enable: true,
          speed: 0.15984015984015984,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 51.29459670609772,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 40,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: '#ffffff',
        opacity: 1,
        width: 2,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: false,
          mode: 'remove',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <>
      <SEO title="Home" />
      <Background params={params} />
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
            As a front end web developer with years of experience I create
            amazing websites and web apps to make the internet a better place.{' '}
            <strong>
              <Link to="/contact/">Get in touch</Link>
            </strong>{' '}
            to discuss how we can work together.
          </Text>
        </Container>
      </Intro>
    </>
  );
};

const Background = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;

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
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0.5rem 0;
`;

export default IndexPage;
