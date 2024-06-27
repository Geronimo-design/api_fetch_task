/** @format */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../NavBar';

test('It renders correctly', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const ButtonElement = screen.getByTestId('NavBar test');
  expect(ButtonElement).toBeInTheDocument();
});
