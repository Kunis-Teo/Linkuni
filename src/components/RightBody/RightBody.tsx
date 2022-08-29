import React, { useState, useCallback } from "react";

import Header from "@/components/Header/Header";
import SearchPage from "@/components/SearchPage/SearchPage";
import TagList from "@/domains/tag/List";
import LinkForm from "@/components/LinkForm";
import UrlCardList from "@/components/UrlCardList/UrlCardList";
import { mockCardData } from "@/mocks/mockCardData";
import kangaroo from "@/assets/kangaroo.png";
import addbtn from "@/assets/addbtn.png";
import {
  SearchPageWrapper,
  AddButton,
  KangarooImage,
} from "./RightBody.styled";

function RightBody() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddButtonClick = useCallback(() => {
    setModalOpen(true);
  }, []);

  return (
    <>
      <Header />
      <SearchPageWrapper>
        <KangarooImage src={kangaroo} />
        <SearchPage />
        <TagList />
        <AddButton src={addbtn} onClick={handleAddButtonClick} />
      </SearchPageWrapper>
      <LinkForm linkData={null} visible={modalOpen} setVisible={setModalOpen} />
      <UrlCardList categoryTitle="프론트엔드" cards={mockCardData} />
      <UrlCardList categoryTitle="즐겨찾기" cards={mockCardData} />
    </>
  );
}

export default RightBody;
