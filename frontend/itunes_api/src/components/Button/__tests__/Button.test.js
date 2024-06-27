/** @format */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Button from '../Button';

test('It renders correctly', () => {
  render(<Button />);
  const ButtonElement = screen.getByTestId('Button test');
  expect(ButtonElement).toBeInTheDocument();
});
