import React from "react";
import { URL } from "@/types";
import UrlCard from "@/components/UrlCard/UrlCard";

import { StyledWrapper } from "./UrlCardList.styled";

interface Props {
  cards: URL[];
  categoryTitle: string;
}

function UrlCardList({ cards, categoryTitle }: Props) {
  return (
    <StyledWrapper>
      <h2 className="section-title">{categoryTitle}</h2>
      <ul className="card-list-wrapper">
        {cards.map((card) => (
          <UrlCard {...card} key={card.id} />
        ))}
      </ul>
    </StyledWrapper>
  );
}

export default UrlCardList;
