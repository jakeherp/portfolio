import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getBackground } from '../templates/Layout';

interface IProps {
  item: {
    title: string;
    url: string;
    id?: number | string;
  };
  toggle: () => void;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item: { title, url }, toggle }: IProps) => {
  const StyledLink = styled(Link)`
    color: ${getBackground};
  `;

  return (
    <Item
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <StyledLink to={url} onClick={toggle}>
        {title}
      </StyledLink>
    </Item>
  );
};

const Item = styled(motion.li)`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
`;
