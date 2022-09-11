import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Star from './Star';

describe('<Star />', () => {
  test('it should mount', () => {
    render(<Star />);
    
    const star = screen.getByTestId('Star');

    expect(star).toBeInTheDocument();
  });
});