import React from 'react';
import styled from 'styled-components';

const Button = (props: any) => {
  const { children, href, rel, target } = props;

  return (
    <StyledButton
      href={href}
      target={target || undefined}
      rel={rel || target === '_blank' ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.a`
  background: #fff;
  border: 2px solid #e94e1b;
  color: #e94e1b;
  padding: 0.5rem 2rem;
  border-radius: 99px;
  margin: 1rem 0;
  transition: 0.2s;
  display: inline-block;
  text-decoration: none;
  &:hover {
    background: #e94e1b;
    color: #fff;
  }
`;
