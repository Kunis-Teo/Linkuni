import React from 'react';

import Header from '@/components/Header/Header';
import SearchPage from '@/components/SearchPage/SearchPage';
import TagList from '@/domains/tag/List';
import { SearchPageWrapper, AddButton } from './RightBody.styled';

function RightBody() {
  return (
    <>
      <Header />
      <SearchPageWrapper>
        <img src="kangaroo.png" />
        <SearchPage />
        <TagList />
        <AddButton src="addbtn.png" />
      </SearchPageWrapper>
    </>
  );
}

export default RightBody;
