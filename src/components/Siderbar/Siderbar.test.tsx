import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from './';

describe('Sidebar component displayed correctly', () => {
  test('Is the Sidebar component visible', () => {
    render(<Sidebar stage={1} />);
    const sidebar = screen.getByTestId('sideBar');
    expect(sidebar).toBeInTheDocument();
  });

  test('Show sidebar to be on the first stage', () => {
    render(<Sidebar stage={1} />);
    const sidebar = screen.getByTestId('sidebarStage-1');
    expect(sidebar).toBeInTheDocument();
  });

  test('Show sidebar to be on the second stage', () => {
    render(<Sidebar stage={2} />);
    const sidebar = screen.getByTestId('sidebarStage-2');
    expect(sidebar).toBeInTheDocument();
  });

  test('Show sidebar to be on the third stage', () => {
    render(<Sidebar stage={3} />);
    const sidebar = screen.getByTestId('sidebarStage-3');
    expect(sidebar).toBeInTheDocument();
  });
});
