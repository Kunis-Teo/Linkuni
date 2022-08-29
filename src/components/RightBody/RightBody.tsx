import React, { useCallback, useState } from "react";

import Header from "@/components/Header/Header";
import SearchPage from "@/components/SearchPage/SearchPage";
import TagList from "@/domains/tag/List";
import { SearchPageWrapper, AddButton } from "./RightBody.styled";
import LinkForm from "@/components/LinkForm";

function RightBody() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddButtonClick = useCallback(() => {
    setModalOpen(true);
  }, []);

  return (
    <>
      <Header />
      <SearchPageWrapper>
        <img src="kangaroo.png" />
        <SearchPage />
        <TagList />
        <AddButton src="addbtn.png" onClick={handleAddButtonClick} />
      </SearchPageWrapper>
      <LinkForm linkData={null} visible={modalOpen} setVisible={setModalOpen} />
    </>
  );
}

export default RightBody;
