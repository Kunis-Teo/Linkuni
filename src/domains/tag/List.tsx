import React from "react";
import styled from "styled-components";
import Tag from "@/components/Tag";
import tags from "./mock.json";

const StyledTagList = styled.div`
  display: flex;
  gap: 8px;
  max-width: 300px;
  flex-wrap: wrap;
  justify-content: center;
`;

function List() {
  return (
    <StyledTagList>
      {React.Children.toArray(tags.map((tag) => <Tag>{tag.name}</Tag>))}
    </StyledTagList>
  );
}

export default List;
