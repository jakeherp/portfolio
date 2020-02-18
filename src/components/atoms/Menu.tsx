import React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const Menu = ({ children }: IProps) => <Navigation>{children}</Navigation>;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  margin: 0;

  li {
    margin: 0 0.5rem;

    a {
      padding: 0px 0.25rem;
      &::after {
        content: '';
        display: block;
        height: 10px;
        width: 0%;
        margin-top: -10px;
        background: #e94e1b;
        transition: all 0.5s ease 0s;
      }
      &:hover {
        border-bottom: none;
        &::after {
          width: 110%;
        }
      }
    }
    svg {
      margin-left: 1rem;
    }
  }
`;

export default Menu;
