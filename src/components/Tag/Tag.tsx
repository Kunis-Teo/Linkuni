import React from "react";
import { StyledTag } from "./Tag.styled";

type Props = {
  selected: string[];
  children: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 *  @usage onClick={(e) => e.currentTarget.textContent.split(" ")[1]}
 */
function Tag(props: Props) {
  const { selected, children, onClick } = props;

  function checkSelected() {
    return selected.includes(children);
  }

  return (
    <StyledTag selected={checkSelected()} onClick={onClick}>
      # {children}
    </StyledTag>
  );
}

export default Tag;
