import React from "react";
import { useSelectedTags } from "@/store/selectedTags";
import { Tag as TagType } from "@/types";
import { StyledTag } from "./Tag.styled";

type Props = {
  tag: TagType;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Tag(props: Props) {
  const { tag, onClick } = props;

  const { hasSelectedTag } = useSelectedTags();

  return (
    <StyledTag selected={hasSelectedTag(tag)} onClick={onClick}>
      # {tag.name}
    </StyledTag>
  );
}

export default Tag;
