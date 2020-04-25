import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useToggle from '../useToggle';

const Toggle = () => {
  const isOpen = useToggle(false);

  return (
    <>
      <button type="button" onClick={() => isOpen.toggle()}>
        Toggle me
      </button>
      <div id={isOpen.value.toString()}>This is a toggle</div>
    </>
  );
};

test('toggle()', () => {
  render(<Toggle />);
  const button = screen.getByText(/toggle me/i);
  const output = screen.getByText(/this is a toggle/i);

  expect(button).toHaveTextContent(`Toggle`);
  expect(output).toHaveAttribute('id', 'false');

  fireEvent.click(button);
  // assert new state
  expect(output).toHaveAttribute('id', 'true');
  // add third value
  fireEvent.click(button);
  // assert new state
  expect(output).toHaveAttribute('id', 'false');
});

const SetTrue = () => {
  const isOpen = useToggle(false);

  return (
    <>
      <button type="button" onClick={() => isOpen.setTrue()}>
        Set true
      </button>
      <div id={isOpen.value.toString()}>This is a toggle</div>
    </>
  );
};

test('setTrue()', () => {
  render(<SetTrue />);
  const button = screen.getByText(/set true/i);
  const output = screen.getByText(/this is a toggle/i);

  expect(button).toHaveTextContent(`Set true`);
  expect(output).toHaveAttribute('id', 'false');

  fireEvent.click(button);
  // assert new state
  expect(output).toHaveAttribute('id', 'true');
  // add third value
  fireEvent.click(button);
  // assert new state
  expect(output).toHaveAttribute('id', 'true');
});

const SetFalse = () => {
  const isOpen = useToggle(true);

  return (
    <>
      <button type="button" onClick={() => isOpen.setFalse()}>
        Set false
      </button>
      <div id={isOpen.value.toString()}>This is a toggle</div>
    </>
  );
};

test('setFalse()', () => {
  render(<SetFalse />);
  const button = screen.getByText(/set false/i);
  const output = screen.getByText(/this is a toggle/i);

  expect(button).toHaveTextContent(`Set false`);
  expect(output).toHaveAttribute('id', 'true');

  fireEvent.click(button);
  // assert new state
  expect(output).toHaveAttribute('id', 'false');
  // add third value
  fireEvent.click(button);
  // assert new state
  expect(output).toHaveAttribute('id', 'false');
});
