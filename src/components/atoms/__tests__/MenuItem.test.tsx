import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { MenuItem } from '../MenuItem';

test('renders correctly', () => {
  const props = {
    item: {
      title: 'Home',
      url: '/',
    },
    toggle: () => {},
  };
  const { container } = render(<MenuItem {...props} />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      margin: 0;
      padding: 0;
      list-style: none;
      margin-bottom: 20px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      cursor: pointer;
      font-size: 1.5rem;
    }

    <li
      class="c0"
      data-testid="home"
      style="opacity: 0; pointer-events: none; transform: translateY(50px) translateZ(0);"
    >
      <a
        class=""
        href="/"
      >
        Home
      </a>
    </li>
  `);
});
