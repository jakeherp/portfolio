import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { MenuToggle } from '../MenuToggle';

test('renders correctly', () => {
  const props = {
    toggle: () => {},
  };
  const { container } = render(<MenuToggle {...props} />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      outline: none;
      border: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      cursor: pointer;
      position: absolute;
      top: 18px;
      left: 15px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: transparent;
    }

    <button
      class="c0"
      data-testid="MenuToggle"
    >
      <svg
        class=""
        height="23"
        viewBox="0 0 23 23"
        width="23"
      >
        <path
          fill="transparent"
          stroke="hsl(0, 0%, 18%)"
          stroke-linecap="round"
          stroke-width="3"
        />
        <path
          d="M 2 9.423 L 20 9.423"
          fill="transparent"
          stroke="hsl(0, 0%, 18%)"
          stroke-linecap="round"
          stroke-width="3"
        />
        <path
          fill="transparent"
          stroke="hsl(0, 0%, 18%)"
          stroke-linecap="round"
          stroke-width="3"
        />
      </svg>
    </button>
  `);
});
