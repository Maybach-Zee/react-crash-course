import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React Crash Course text', () => {
  render(<App />);
  const textElement = screen.getByText(/React Crash Course/i);
  expect(textElement).toBeInTheDocument();
});
