import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type TProps = {
  color: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  cursor: pointer;
  margin: 5px;
  padding: 10px 15px;
  outline: none;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:active {
    opacity: 0.9;
  }

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    scale: 1.01;k
  }

  :focus{
    outline: none !important;
    border:1px solid #666; 
  }

`;

const Button = ({ color = "white", children, ...restProps }: TProps) => {
  return (
    <StyledButton {...restProps} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
