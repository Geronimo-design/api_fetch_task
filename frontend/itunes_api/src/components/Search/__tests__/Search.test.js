/** @format */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../Search';

test('It renders correctly', () => {
  render(<Search />);
  const ButtonElement = screen.getByTestId('Search test');
  expect(ButtonElement).toBeInTheDocument();
});
