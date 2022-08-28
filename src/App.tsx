import RightBody from "@/components/RightBody/RightBody";
import LinkForm from "@/components/LinkForm/index";
import UrlCardList from "@/components/UrlCardList/UrlCardList";
import { mockCardData } from "./mocks/mockCardData";

import { Wrapper } from "./App.styled";

function App() {
  return (
    <Wrapper>
      <RightBody />
      <UrlCardList categoryTitle="프론트엔드" cards={mockCardData} />
      <UrlCardList categoryTitle="{categoryTitle}" cards={mockCardData} />
      <LinkForm linkData={null} />
    </Wrapper>
  );
}

export default App;
