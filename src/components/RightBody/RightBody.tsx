import React from "react";

import Header from "@/components/Header/Header";
import SearchPage from "@/components/SearchPage/SearchPage";
import TagList from "@/domains/tag/List";
import UrlCardList from "@/components/UrlCardList/UrlCardList";
import { SearchPageWrapper, AddButton } from "./RightBody.styled";
import { mockCardData } from "@/mocks/mockCardData";

function RightBody() {
  return (
    <>
      <Header />
      <SearchPageWrapper>
        <img src="kangaroo.png" />
        <SearchPage />
        <TagList />
        <AddButton src="addbtn.png" />
      </SearchPageWrapper>
      <UrlCardList categoryTitle="프론트엔드" cards={mockCardData} />
      <UrlCardList categoryTitle="{categoryTitle}" cards={mockCardData} />
    </>
  );
}

export default RightBody;
