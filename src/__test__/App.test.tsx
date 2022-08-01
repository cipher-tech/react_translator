import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Test that all components are rendered', () => {
  test('renders nav bar', () => {
    render(<App />);
    const navbarText = screen.getByText(/MetaTranslate App/i);
    expect(navbarText).toBeInTheDocument();
  });
  test('renders Instructions', () => {
    render(<App />);
    const instructions = screen.getByText(/Type the text you wish to translate into any of the input boxes/i);
    expect(instructions).toBeInTheDocument();
  });
  test('renders TranslatorBox', () => {
    render(<App />);
    const placeholder = screen.getAllByPlaceholderText(/Enter text here/i);
    const textAreaNumber = placeholder.length
    expect(textAreaNumber).toEqual(2);
  });
  test('renders Translate button', () => {
    render(<App />);
    const linkElement = screen.getByText(/Widely used phrases:/i);
    expect(linkElement).toBeInTheDocument();
  });


})
 