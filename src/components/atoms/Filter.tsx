import React from 'react';
import styled from 'styled-components';
import camelCase from 'camelcase';
import { getTextColor } from 'Templates/Layout';

interface IProps {
  name: string;
  setFilter(name: string): void;
  currentFilter: string;
}

const Filter = ({ name, setFilter, currentFilter }: IProps) => {
  const clickHandler = () => {
    if (currentFilter === name) {
      setFilter('');
    } else {
      setFilter(name);
    }
  };

  return (
    <Button
      name={name}
      className={currentFilter === name ? 'active' : undefined}
      onClick={clickHandler}
      data-testid={`filter${camelCase(name, { pascalCase: true })}`}
    >
      {name}
    </Button>
  );
};

const Button = styled.button`
  background: transparent;
  border: none;
  color: ${getTextColor};
  margin-bottom: 1rem;
  opacity: 0.5;
  &.active {
    opacity: 1;
    border-bottom: 2px solid ${getTextColor};
  }
`;

export default Filter;
