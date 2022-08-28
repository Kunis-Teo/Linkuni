import React from 'react';

import { StyledFormInput } from './FormInput.styled';

function FormInput({ height = '20px', label, ...props }) {
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
}

export default FormInput;
