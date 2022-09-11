import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MobileApp from './MobileApp';

describe('<MobileApp />', () => {
  test('it should mount', () => {
    render(<MobileApp />);
    
    const mobileApp = screen.getByTestId('MobileApp');

    expect(mobileApp).toBeInTheDocument();
  });
});