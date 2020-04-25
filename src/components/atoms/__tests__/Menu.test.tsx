import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Menu from '../Menu';

test('renders correctly', () => {
  const { container } = render(
    <Menu>
      <li>Menu Item</li>
    </Menu>
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      list-style: none;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      font-size: 20px;
      margin: 0;
    }

    .c0 li {
      margin: 0 0.5rem;
    }

    .c0 li a {
      padding: 0px 0.25rem;
    }

    .c0 li a::after {
      content: '';
      display: block;
      height: 10px;
      width: 0%;
      margin-top: -10px;
      background: #e94e1b;
      -webkit-transition: all 0.5s ease 0s;
      transition: all 0.5s ease 0s;
    }

    .c0 li a:hover {
      border-bottom: none;
    }

    .c0 li a:hover::after {
      width: 110%;
    }

    .c0 li svg {
      margin-left: 1rem;
    }

    <ul
      class="c0"
    >
      <li>
        Menu Item
      </li>
    </ul>
  `);
});
