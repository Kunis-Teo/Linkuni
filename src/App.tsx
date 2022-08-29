import React from "react";
import {RecoilRoot} from "recoil";

import RightBody from "@/components/RightBody/RightBody";
import Category from "@/components/Category/Category";
import Contents from "@/components/Category/Contents_new";
import Toast from "@/components/common/Toast";

import {Wrapper} from "./App.styled";

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <Category />
        <RightBody />
        <Contents />
      </Wrapper>
        <Toast />
    </RecoilRoot>
  );
}

export default App;
