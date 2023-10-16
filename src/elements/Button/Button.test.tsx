import React from 'react';
import { render, screen } from '@testing-library/react';
import PrimaryButton from '.';

describe('Primary button tests', () => {
  test('It should render the button correctly', () => {
    render(<PrimaryButton title="Continue" isDisabled={false} />);

    const button = screen.getByTestId('primaryButton');

    expect(button).toBeInTheDocument();
  });

  test('It should be enabled', () => {
    render(<PrimaryButton title="Continue" isDisabled={false} />);

    const button = screen.getByTestId('primaryButton');

    expect(button).not.toBeDisabled();
  });

  test('It should be disabled', () => {
    render(<PrimaryButton title="Continue" isDisabled={true} />);

    const button = screen.getByTestId('primaryButton');

    expect(button).toHaveProperty('disabled', true);
  });
});
