import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SocialLogo from './SocialLogo';

describe('<SocialLogo />', () => {
  test('it should mount', () => {
    render(<SocialLogo />);
    
    const socialLogo = screen.getByTestId('SocialLogo');

    expect(socialLogo).toBeInTheDocument();
  });
});