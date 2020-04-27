import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Filter from '../Filter';

test('renders correctly', () => {
  const props = {
    name: 'Filter 1',
    currentFilter: '',
    setFilter: () => {},
  };
  const { container } = render(<Filter {...props} />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      background: transparent;
      border: none;
      margin-bottom: 1rem;
      opacity: 0.5;
    }

    .c0.active {
      opacity: 1;
      border-bottom: 2px solid;
    }

    <button
      class="c0"
      data-testid="filterFilter1"
      name="Filter 1"
    >
      Filter 1
    </button>
  `);
});
