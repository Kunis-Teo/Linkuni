import React from 'react';

import RightBody from '@/components/RightBody/RightBody';
import UrlCardList from '@/components/UrlCardList/UrlCardList';
import Category from '@/components/Category/Category';
import Contents from '@/components/Category/Contents_new';
import { mockCardData } from './mocks/mockCardData';

import { Wrapper } from './App.styled';

function App() {
  return (
    <Wrapper>
      <Category />
      <RightBody />
      <UrlCardList categoryTitle="프론트엔드" cards={mockCardData} />
      <UrlCardList categoryTitle="{categoryTitle}" cards={mockCardData} />

      <Contents />
    </Wrapper>
  );
}

export default App;
