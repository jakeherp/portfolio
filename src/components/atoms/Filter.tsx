import React from "react"
import styled from "styled-components"

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
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
  &.active {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
`

export default Filter
