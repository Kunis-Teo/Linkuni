import React from "react";

import RightBody from "@/components/RightBody/RightBody";
import LinkForm from "@/components/LinkForm/index";
import UrlCardList from "@/components/UrlCardList/UrlCardList";
import Category from '@/components/Category/Category';
import Contents from '@/components/Category/Contents_new';
// import SideBar from "@/components/Category/Example";
import { mockCardData } from "./mocks/mockCardData";

import { Wrapper } from "./App.styled";

function App() {
  return (
    <Wrapper>
      <RightBody />
      <UrlCardList categoryTitle="프론트엔드" cards={mockCardData} />
      <UrlCardList categoryTitle="{categoryTitle}" cards={mockCardData} />
      <LinkForm linkData={null} />
      {/* <SideBar/> */}
      <Category/>
      <Contents/>
    </Wrapper>
  );
}

export default App;
