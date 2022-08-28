import styled from "styled-components";

export const StyledFormInput = styled.input<{ height: string }>`
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  width: 90%;
  height: ${({ height }) => height};
`;
