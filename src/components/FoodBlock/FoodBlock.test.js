import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FoodBlock from './FoodBlock';

describe('<FoodBlock />', () => {
  test('it should mount', () => {
    render(<FoodBlock />);
    
    const foodBlock = screen.getByTestId('FoodBlock');

    expect(foodBlock).toBeInTheDocument();
  });
});