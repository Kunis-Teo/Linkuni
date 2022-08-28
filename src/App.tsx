import RightBody from "@/components/RightBody/RightBody";
import LinkForm from "@/components/LinkForm/index";
import { Wrapper } from "./App.styled";
import UrlCardList from "./components/UrlCardList/UrlCardList";

const mockCardData = [
  {
    id: 112,
    url: "https://www.naver.com",
    title: "네이버",
    imageUrl: "https://picsum.photos/300/200",
    isStarred: true,
    isWatched: false,
    createdAt: 101010,
    watchedAt: 1010,
    tags: [{ id: 2, name: "#리액트", createdAt: 123 }],
    category: {
      id: 1,
      name: "카테고리2",
      isPinned: false,
    },
  },
  {
    id: 12,
    url: "https://www.tstroy.com",
    title: "큐와 스택",
    imageUrl: "https://picsum.photos/300/200",
    isStarred: false,
    isWatched: true,
    createdAt: 101010,
    watchedAt: 1010,
    tags: [
      { id: 2, name: "#자료구조", createdAt: 123 },
      { id: 23, name: "#공부", createdAt: 1223 },
      { id: 23, name: "#블로그", createdAt: 1223 },
    ],
    category: {
      id: 1,
      name: "카테고리2",
      isPinned: false,
    },
  },
  {
    id: 1242,
    url: "https://www.naver.com",
    title: "북마크3",
    imageUrl: "https://picsum.photos/seed/picsum/200/300",
    isStarred: false,
    isWatched: false,
    createdAt: 101010,
    watchedAt: 1010,
    tags: [
      { id: 2, name: "#리액트", createdAt: 123 },
      { id: 23, name: "#공부", createdAt: 1223 },
    ],
    category: {
      id: 1,
      name: "카테고리2",
      isPinned: false,
    },
  },
  {
    id: 123,
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
  },
  {
    id: 124,
    url: "https://www.naver.com",
    title: "마지막",
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
  },
];

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
