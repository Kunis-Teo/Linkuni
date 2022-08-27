import styled, { css } from "styled-components";

const borderRadius = css`
  border-radius: 100px;
`;

const borderColor = "black";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 600px;
  border: 1px solid ${borderColor};

  ${borderRadius}
`;

interface OptionProps {
  isSelected: boolean;
}

export const Option = styled.div<OptionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0 10px;
  color: ${(props) => (props.isSelected ? "white" : "black")};
  z-index: 10;
  transition: color 0.5s;
  font-weight: bold;
`;

interface SelectorProps {
  selectedIndex: number;
  totalLength: number;
}

export const Selector = styled.div<SelectorProps>`
  position: absolute;
  width: ${(props) => Math.floor(100 / props.totalLength)}%;
  height: 100%;
  background-color: ${borderColor};
  content: none;
  left: ${(props) =>
    props.selectedIndex * Math.floor(100 / props.totalLength)}%;
  transition: left 0.5s;
  z-index: -1;

  ${borderRadius}
`;
