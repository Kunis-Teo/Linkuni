import React from "react";
import { RecoilRoot } from "recoil";

import RightBody from "@/components/RightBody/RightBody";
import Category from "@/components/Category/Category";
// import Contents from "@/components/Category/Contents_new";

import { Wrapper } from "./App.styled";

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <Category />
        <RightBody />
        {/* <Contents /> */}
      </Wrapper>
    </RecoilRoot>
  );
}

export default App;
