import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border-bottom: 1px black solid;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  outline: none;
  border: none;
  box-sizing: border-box;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  top: 0;
  right: 0;
`;
