import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MenuItem } from '../atoms/MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }: { toggle: () => void }) => (
  <Menu variants={variants}>
    {itemIds.map((item) => (
      <MenuItem item={item} key={item.id} toggle={toggle} />
    ))}
  </Menu>
);

const itemIds = [
  {
    id: 0,
    title: 'Home',
    url: '/',
  },
  {
    id: 1,
    title: 'About',
    url: '/about',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Contact',
    url: '/contact',
  },
];

const Menu = styled(motion.ul)`
  margin: 0;
  padding: 0;
  padding: 40px;
  position: absolute;
  top: 100px;
  width: 230px;
`;
