import React from 'react';
const { queryAllByText } = render(<App />);
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Adds a task', () => {
  render(<App />);
  const data = queryAllByText('addTask-form');
  expect(data).toHaveFormValues({
    task: 'Take the dog for a walk',
  })
})