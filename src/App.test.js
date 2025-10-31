import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation', () => {
  render(<App />);
  const logo = screen.getByText(/MyMoveAdvisor/i);
  expect(logo).toBeInTheDocument();
});

test('renders hero section', () => {
  render(<App />);
  const heading = screen.getByText(/Move Anything/i);
  expect(heading).toBeInTheDocument();
});
