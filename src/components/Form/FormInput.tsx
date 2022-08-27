import React from "react";
import styled from "styled-components";

const StyledFormInput = styled.input<{ height: string }>`
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  width: 90%;
  height: ${({ height }) => height};
`;

const FormInput = ({ height = "20px", label, ...props }) => {
  return (
    <>
      <p>{label}</p>
      <StyledFormInput
        name={props.name}
        height={height}
        type="text"
        placeholder={`${label}을 입력하세요`}
      />
    </>
  );
};

export default FormInput;
