import React, { useState } from "react";

import Header from "@/components/Header/Header";
import SearchPage from "@/components/SearchPage/SearchPage";
import TagList from "@/domains/tag/List";
import LinkForm from "@/components/LinkForm";
import UrlCardList from "@/components/UrlCardList/UrlCardList";
import { mockCardData } from "@/mocks/mockCardData";
import { SearchPageWrapper, AddButton } from "./RightBody.styled";

function RightBody() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header />
      <SearchPageWrapper>
        <img src="kangaroo.png" />
        <SearchPage />
        <TagList />
        <AddButton src="addbtn.png" />
      </SearchPageWrapper>
      <LinkForm linkData={null} visible={modalOpen} setVisible={setModalOpen} />
      <UrlCardList categoryTitle="프론트엔드" cards={mockCardData} />
      <UrlCardList categoryTitle="{categoryTitle}" cards={mockCardData} />
    </>
  );
}

export default RightBody;
