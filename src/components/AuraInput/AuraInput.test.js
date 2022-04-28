import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AuraInput from './AuraInput';

describe('Input', () => {
  it('should render default Input', () => {
    const inputProps = {
        onClick: jest.fn(),
    };
    render(<AuraInput placeholder={'Default Input'} {...inputProps}></AuraInput>)
    const element = screen.getByPlaceholderText('Default Input');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('INPUT');
    expect(inputProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(inputProps.onClick).toHaveBeenCalledTimes(1);
  });
});
