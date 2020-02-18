import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Accent = styled.span`
  color: #e94e1b;
`;

interface IProps {
  children: React.ReactNode;
}

const Highlight = ({ children }: IProps) => <Accent>{children}</Accent>;

Highlight.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Highlight;
