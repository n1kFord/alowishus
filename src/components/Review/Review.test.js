import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Review from './Review';

describe('<Review />', () => {
  test('it should mount', () => {
    render(<Review />);
    
    const review = screen.getByTestId('Review');

    expect(review).toBeInTheDocument();
  });
});