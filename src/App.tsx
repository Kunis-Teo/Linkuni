import UrlCard from "@/components/UrlCard/UrlCard";
import RightBody from "@/components/RightBody/RightBody";
import { Wrapper } from "./App.styled";

const mockCardData = {
  id: 12,
  url: "https://www.naver.com",
  title: "네이버",
  imageUrl: "https://picsum.photos/seed/picsum/200/300",
  isStarred: false,
  isWatched: false,
  createdAt: 101010,
  watchedAt: 1010,
  tags: [{ id: 2, name: "#리액트", createdAt: 123 }],
  category: {
    id: 1,
    name: "카테고리2",
    isPinned: false,
  },
};

function App() {
  return (
    <Wrapper>
      <RightBody />
      <UrlCard {...mockCardData} />
    </Wrapper>
  );
}

export default App;
