import styled from 'styled-components';

type StyledTagProps = {
  selected: boolean;
};

export const StyledTag = styled.button<StyledTagProps>`
  padding: 4px 8px;
  background-color: ${({ selected }) => (selected ? "#A4A5A8" : "#ebedf0")};
  border-radius: 20px;

  &:hover {
    background-color: #ebedf090;
  }
`;
