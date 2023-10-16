import React from 'react';
import { render, screen } from '@testing-library/react';
import { BorderButton } from './index';

describe('TopUpView component displayed correctly', () => {
  describe('Inner BorderButton element display', () => {
    test('Is default state visible', () => {
      render(
        <BorderButton
          title="Prepaid"
          isActive={false}
          handleClick={() => null}
        />
      );
      const button = screen.getByTestId('borderButton');
      expect(button).toBeInTheDocument();
    });

    test('Is enabled state visible', () => {
      render(
        <BorderButton
          title="Prepaid"
          isActive={true}
          handleClick={() => null}
        />
      );
      const button = screen.getByTestId('borderButton');
      expect(button.className).toMatch(/is-active/);
    });
  });
});
