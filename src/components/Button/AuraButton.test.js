import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AuraButton from './AuraButton';

describe('Buttton', () => {
  it('should render default button', () => {
    const btnProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(
      <AuraButton {...btnProps}>Default Button</AuraButton>
    );
    const element = wrapper.queryByText('Default Button');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('BUTTON');
    expect(btnProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(btnProps.onClick).toHaveBeenCalledTimes(1);
  });
});
