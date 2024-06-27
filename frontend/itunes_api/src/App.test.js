/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('it matches the snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
