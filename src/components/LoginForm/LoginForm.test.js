import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('should render default loginform', () => {
    const formProps = {
      onClick: jest.fn(),
    };

    const wrapper = render(
      <LoginForm {...formProps}>
      </LoginForm>
    ).container.firstChild;

    expect(wrapper).toHaveClass('jumbo-card');
   
  });
});
