import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero name', () => {
  render(<App />);
  const heroName = screen.getByRole('heading', { name: /nelson soto trujillo/i });
  expect(heroName).toBeInTheDocument();
});
