import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { motion, useCycle } from 'framer-motion';
import styled from 'styled-components';

import { useDimensions } from '../../hooks/useDimensions';
import { MenuToggle } from '../atoms/MenuToggle';
import { Navigation as Nav } from '../molecules/Navigation';

// import NavigationContext from "../../context/navigation.context"
import Highlight from '../atoms/Highlight';
import ToggleMode from '../atoms/ToggleMode';

const sidebar = {
  open: (height = 1080) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  // const MenuToggle = useContext(NavigationContext)
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Head>
      <Toggler
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <Background className="menu-background" variants={sidebar} />
        <Nav toggle={() => toggleOpen()} />
        <MenuToggle toggle={() => toggleOpen()} />
      </Toggler>
      <h1>
        <Link to="/">
          &lt;Jacob Herper <Highlight>/</Highlight>&gt;
        </Link>
      </h1>
      <ThemeToggle />
    </Head>
  );
};

const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
`;

const Toggler = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: auto;
`;

const Head = styled.header`
  padding: 1rem 3%;
  display: flex;
  justify-content: center;

  h1 {
    margin: 0;
    line-height: 1;

    @media screen and (max-width: 375px) {
      font-size: 1.25rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  @media print {
    display: none;
  }
`;

const ThemeToggle = styled(ToggleMode)`
  position: absolute;
  right: 0;
`;

export default Header;
