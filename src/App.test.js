import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './App'
import Img from './App'

describe('Button component tests', () => {
  test('renders without crashing', () => {

    render(<Button  />);

    const button = screen.getByText('Lançar')

    expect(button).toBeInTheDocument();
  });
});

describe('Img component test', () => {
  test('renders without crashing', () => {

    render(<Img  />);

    const dice = screen.getByAltText('dice')

    expect(dice).toBeInTheDocument();
  });
});


