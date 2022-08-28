import React from "react";

import RightBody from "@/components/RightBody/RightBody";
import LinkForm from "@/components/LinkForm/index";
import { Wrapper } from "./App.styled";

function App() {
  return (
    <Wrapper>
      <RightBody />
      <LinkForm linkData={null} />
    </Wrapper>
  );
}

export default App;
