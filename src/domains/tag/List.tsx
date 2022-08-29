import React, { useCallback } from "react";
import styled from "styled-components";
import Tag from "@/components/Tag";
import useGetTagList from "@/hooks/useGetTagList";
import { useSelectedTags } from "@/store/selectedTags";
import { Tag as TagType } from "@/types";

const StyledTagList = styled.div`
  display: flex;
  gap: 8px;
  max-width: 300px;
  flex-wrap: wrap;
  justify-content: center;
`;

function List() {
  const { data } = useGetTagList();
  const { addSelectedTag } = useSelectedTags();

  const tags = data?.tagDTOList;

  const onSelectTag = useCallback(
    (tag: TagType) => {
      addSelectedTag(tag);
    },
    [addSelectedTag]
  );
  if (!data) return <>태그 데이터가 아직 없어요 :( </>;
  return (
    <StyledTagList>
      {React.Children.toArray(
        tags?.map((tag: TagType) => (
          <Tag tag={tag} onClick={() => onSelectTag(tag)} />
        ))
      )}
    </StyledTagList>
  );
}

export default List;
