import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoffeeBlock from './CoffeeBlock';

describe('<CoffeeBlock />', () => {
  test('it should mount', () => {
    render(<CoffeeBlock />);
    
    const coffeeBlock = screen.getByTestId('CoffeeBlock');

    expect(coffeeBlock).toBeInTheDocument();
  });
});