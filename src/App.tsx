import React from "react";
import RightBody from "@/components/RightBody/RightBody";
import UrlCardList from "@/components/UrlCardList/UrlCardList";
import { mockCardData } from "./mocks/mockCardData";

import { Wrapper } from "./App.styled";
import Toast from "@/components/common/Toast";

function App() {
  return (
    <>
      <Wrapper>
        <RightBody />
        <UrlCardList categoryTitle="프론트엔드" cards={mockCardData} />
        <UrlCardList categoryTitle="{categoryTitle}" cards={mockCardData} />
      </Wrapper>
      <Toast />
    </>
  );
}

export default App;
