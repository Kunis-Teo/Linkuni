import React from "react";

import Header from "@/components/Header/Header";
import SearchPage from "@/components/SearchPage/SearchPage";
import { Wrapper, SearchPageWrapper } from "./App.styled";

function App() {
  return (
    <Wrapper>
      <Header />
      <SearchPageWrapper>
        <img src="kangaroo.png" />
        <SearchPage />
      </SearchPageWrapper>
    </Wrapper>
  );
}

export default App;
