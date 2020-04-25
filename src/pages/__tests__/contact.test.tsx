import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import * as Gatsby from 'gatsby';
import { render } from '@testing-library/react';
import Contact from '../contact';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      description: '',
      title: 'Contact',
      lang: 'en',
      meta: [],
      keywords: [],
    },
  },
}));

test('renders correctly', () => {
  const { container } = render(<Contact />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders inputs with associated labels', () => {
  const { getByLabelText } = render(<Contact />);
  const nameInput = getByLabelText(/your name/i);
  expect(nameInput).toHaveAttribute('type', 'text');
  const emailInput = getByLabelText(/your email/i);
  expect(emailInput).toHaveAttribute('type', 'email');
  const message = getByLabelText(/your message/i);
  expect(message).toHaveAttribute('name', 'message');
  expect(message).toBeRequired();
});

test('inputs are required', () => {
  const { getByLabelText } = render(<Contact />);
  const nameInput = getByLabelText(/your name/i);
  expect(nameInput).toBeRequired();
  const emailInput = getByLabelText(/your email/i);
  expect(emailInput).toBeRequired();
  const message = getByLabelText(/your message/i);
  expect(message).toBeRequired();
});
