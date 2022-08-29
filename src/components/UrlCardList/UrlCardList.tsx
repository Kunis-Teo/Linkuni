import React from "react";
import { URL } from "@/types";
import UrlCard from "@/components/UrlCard/UrlCard";

import { StyledWrapper } from "./UrlCardList.styled";
import { useSelectedTags } from "@/store/selectedTags";

interface Props {
  cards: URL[];
  categoryTitle: string;
}

function UrlCardList({ cards, categoryTitle }: Props) {
  const { selectedTags, noSelectedTags } = useSelectedTags();

  function checkTagInclude(card) {
    return card.tags.some((tag) =>
      selectedTags.some((selectedTag) => selectedTag.id === tag.id)
    );
  }

  return (
    <StyledWrapper>
      <h2 className="section-title">{categoryTitle}</h2>
      <ul className="card-list-wrapper">
        {cards.map((card) => {
          if (noSelectedTags || checkTagInclude(card))
            return <UrlCard {...card} key={card.id} />;

          return null;
        })}
      </ul>
    </StyledWrapper>
  );
}

export default UrlCardList;
