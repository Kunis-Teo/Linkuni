import React, { useCallback } from "react";

import Header from "@/components/Header/Header";
import SearchPage from "@/components/SearchPage/SearchPage";
import { Wrapper, SearchPageWrapper, AddButton } from "./App.styled";

function App() {
  const handleAddButtonClick = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <Wrapper>
      <Header />
      <SearchPageWrapper>
        <img src="kangaroo.png" />
        <SearchPage />
        <AddButton src="addbtn.png" onClick={handleAddButtonClick} />
      </SearchPageWrapper>
    </Wrapper>
  );
}

export default App;
