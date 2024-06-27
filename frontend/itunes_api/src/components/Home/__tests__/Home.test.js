/** @format */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';

test('It renders correctly', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const ButtonElement = screen.getByTestId('Home test');
  expect(ButtonElement).toBeInTheDocument();
});
