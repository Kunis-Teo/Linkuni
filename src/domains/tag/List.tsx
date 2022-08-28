import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Tag from "@/components/Tag";
import useGetTagList from "@/hooks/useGetTagList";

const StyledTagList = styled.div`
  display: flex;
  gap: 8px;
  max-width: 300px;
  flex-wrap: wrap;
  justify-content: center;
`;

function List() {
  const { data } = useGetTagList();

  const tags = data?.tagDTOList;

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onSelectTag = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const textContent = e.currentTarget.textContent.split(" ")[1];

      if (selectedTags.includes(textContent)) {
        setSelectedTags([...selectedTags.filter((tag) => tag !== textContent)]);
        return;
      }

      setSelectedTags([
        ...selectedTags,
        e.currentTarget.textContent.split(" ")[1],
      ]);
    },
    [selectedTags]
  );

  return (
    <StyledTagList>
      {React.Children.toArray(
        tags?.map((tag) => (
          <Tag selected={selectedTags} onClick={onSelectTag}>
            {tag.name}
          </Tag>
        ))
      )}
    </StyledTagList>
  );
}

export default List;
