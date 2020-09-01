/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import APP from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<APP />);
  const linkElement = getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});
