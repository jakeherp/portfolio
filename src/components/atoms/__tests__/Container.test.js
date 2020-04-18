import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Container from '../Container';

it('renders correctly', () => {
  const { container } = render(
    <Container>
      <div />
    </Container>
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      width: 1140px;
      max-width: 94%;
      margin: 0 auto;
    }

    <div
      class="c0"
    >
      <div />
    </div>
  `);
});
