import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Highlight from '../Highlight';

test('renders correctly', () => {
  const { container } = render(<Highlight>Highlighted text</Highlight>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      color: #e94e1b;
    }

    <span
      class="c0"
    >
      Highlighted text
    </span>
  `);
});
