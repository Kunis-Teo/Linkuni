import { URL } from "@/types";
import UrlCard from "../UrlCard/UrlCard";
import styled from "styled-components";

interface Props {
  cards: URL[];
  categoryTitle: string;
}

const UrlCardList = ({ cards, categoryTitle }: Props) => {
  return (
    <StyledWrapper>
      <h2 className="section-title">{categoryTitle}</h2>
      <ul className="card-list-wrapper">
        {cards.map((card) => {
          return <UrlCard {...card} key={card.id} />;
        })}
      </ul>
    </StyledWrapper>
  );
};

export default UrlCardList;

const StyledWrapper = styled.section`
  width: 100%;
  padding: 20px;
  .section-title {
    font-size: 24px;
    font-weight: 600;
    padding: 20px 0;
  }
  .card-list-wrapper {
    padding: 0;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;

    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    & > :not(:last-child) {
      margin-right: 10px;
    }
  }
`;
