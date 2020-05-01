import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Button from '../Button';

test('renders correctly', () => {
  const props = {
    href: '/',
    target: '_blank',
  };
  const { container } = render(<Button {...props}>Button Text</Button>);

  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      background: #fff;
      border: 2px solid #e94e1b;
      color: #e94e1b;
      padding: 0.5rem 2rem;
      border-radius: 99px;
      margin: 1rem 0;
      -webkit-transition: 0.2s;
      transition: 0.2s;
      display: inline-block;
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    .c0:hover {
      background: #e94e1b;
      color: #fff;
    }

    <a
      class="c0"
      href="/"
      rel="noopener noreferrer"
      target="_blank"
    >
      Button Text
    </a>
  `);
});

test('should generate rel prop if target is set to _blank', () => {
  const props = {
    href: '/',
    target: '_blank',
  };
  const { getByText, rerender } = render(
    <Button {...props}>Button Text</Button>
  );

  expect(getByText(/Button Text/gi).getAttribute('rel')).toEqual(
    'noopener noreferrer'
  );

  rerender(
    <Button href="/" target="_self">
      Button Text
    </Button>
  );

  expect(getByText(/Button Text/gi).getAttribute('rel')).toBeNull();
});
