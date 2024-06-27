/** @format */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Favourites from '../Favourites';

test('It renders correctly', () => {
  render(
    <MemoryRouter>
      <Favourites />
    </MemoryRouter>
  );
  const ButtonElement = screen.getByTestId('favourites test');
  expect(ButtonElement).toBeInTheDocument();
});
