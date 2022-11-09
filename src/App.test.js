import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rizal Lazuardi/i);
  const loc1 = screen.getByText(/East Java/i);
  const loc2 = screen.getByText(/Indonesia/i);
  expect(linkElement).toBeInTheDocument();
  expect(loc1).toBeInTheDocument();
  expect(loc2).toBeInTheDocument();
});
