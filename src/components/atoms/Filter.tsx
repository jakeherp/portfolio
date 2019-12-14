import React from "react"
import styled from "styled-components"
import { getTextColor } from "../templates/Layout"

interface IProps {
  name: string
  setFilter(name: any): any
  currentFilter: string
}

const Filter = ({ name, setFilter, currentFilter }: IProps) => {
  const clickHandler = () => {
    if (currentFilter === name) {
      setFilter("")
    } else {
      setFilter(name)
    }
  }
  return (
    <Button
      name={name}
      className={currentFilter === name ? "active" : undefined}
      onClick={clickHandler}
    >
      {name}
    </Button>
  )
}

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
`

export default Filter
