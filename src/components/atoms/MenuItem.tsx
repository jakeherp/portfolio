import * as React from 'react';
import { Link } from 'gatsby';
import camelCase from 'camelcase';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from 'styled-theming';

interface IProps {
  item: {
    title: string;
    url: string;
    id?: number | string;
  };
  toggle: () => void;
}

const getBackground = theme('mode', {
  light: '#d6deeb',
  dark: '#011627',
});

const variants = {
  open: {
    y: 0,
    opacity: 1,
    pointerEvents: 'auto',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    pointerEvents: 'none',
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item: { title, url }, toggle }: IProps) => (
  <Item
    variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    data-testid={camelCase(title)}
  >
    <StyledLink to={url} onClick={toggle}>
      {title}
    </StyledLink>
  </Item>
);

const StyledLink = styled(Link)`
  color: ${getBackground};
`;

const Item = styled(motion.li).attrs(() => ({
  initial: 'closed',
  variants,
}))`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
`;
