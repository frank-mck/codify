import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
const { queryAllByText } = render(<App />);


test('renders title', () => {
  render(<App />);
  expect(screen.getByTestId('title')).toHaveTextContent('Efficiency');
});
