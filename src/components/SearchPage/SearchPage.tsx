import React from "react";

import SearchInput from "@/components/SearchPage/SearchInput/SearchInput";
import SearchType from "@/components/SearchPage/SearchType/SearchType";
import { Wrapper } from "./SearchPage.styled";

const selection = ["제목", "태그"];

function SearchPage() {
  return (
    <Wrapper>
      <SearchInput />
      <SearchType selections={selection} />
    </Wrapper>
  );
}

export default SearchPage;
