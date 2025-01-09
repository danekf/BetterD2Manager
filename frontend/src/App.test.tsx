import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/Home/Home';

test('Sign in button shows when not logged in', () => {
  render(<App />);
  type User = {
    bungieName: String;
  }
  const user: User = {
    bungieName: '',
  };
  const signInButton = document.getElementById('signIn');
  expect(signInButton).toBeInTheDocument();
});
