import React, { useCallback } from "react";

import Header from "@/components/Header/Header";
import SearchPage from "@/components/SearchPage/SearchPage";
import Tag from "@/components/Tag";
import { SearchPageWrapper, AddButton } from "./RightBody.styled";

function RightBody() {
  const handleAddButtonClick = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <>
      <Header />
      <SearchPageWrapper>
        <img src="kangaroo.png" />
        <SearchPage />
        <Tag
          onClick={(e) =>
            console.log(e.currentTarget.textContent.split(" ")[1])
          }
        >
          React
        </Tag>
        <AddButton src="addbtn.png" onClick={handleAddButtonClick} />
      </SearchPageWrapper>
    </>
  );
}

export default RightBody;
