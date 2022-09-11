import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Selling from './Selling';

describe('<Selling />', () => {
  test('it should mount', () => {
    render(<Selling />);
    
    const selling = screen.getByTestId('Selling');

    expect(selling).toBeInTheDocument();
  });
});