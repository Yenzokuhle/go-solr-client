import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './';

describe('Header component displayed correctly', () => {
  test('Is the header logo visible?', () => {
    render(<Header onHomeScreen={false} />);

    const displayedImage = document.querySelector('img') as HTMLImageElement;

    expect(displayedImage.src).toContain('gosolr-logo-new');
  });

  test('Header title visible', () => {
    render(<Header onHomeScreen={false} />);

    const headerTitle = screen.getByRole('heading');

    expect(headerTitle).toBeInTheDocument();
  });

  test('Toggle header candidate info modal', () => {
    render(<Header onHomeScreen={false} />);

    const button = screen.getByTestId('pictureButton');

    fireEvent.click(button);

    const modal = screen.getByRole('presentation');

    expect(modal).toBeInTheDocument();
  });
});
