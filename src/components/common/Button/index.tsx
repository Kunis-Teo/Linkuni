import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './Button.styled';

type TProps = {
  color: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ color = 'white', children, ...restProps }: TProps) {
  return (
    <StyledButton {...restProps} color={color}>
      {children}
    </StyledButton>
  );
}

export default Button;
