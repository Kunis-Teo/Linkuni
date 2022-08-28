import React from 'react';
import LinkForm from '@/components/LinkForm';
import Header from '@/components/Header/Header';
import SearchPage from '@/components/SearchPage/SearchPage';
import Tag from '@/components/Tag/Tag';
import { SearchPageWrapper } from './RightBody.styled';

function RightBody() {
  return (
    <>
      <Header />
      <SearchPageWrapper>
        <img src="kangaroo.png" />
        <SearchPage />
        <Tag
          onClick={(e) => console.log(e.currentTarget.textContent.split(' ')[1])}
        >
          React
        </Tag>
        <LinkForm linkData={null} />
      </SearchPageWrapper>
    </>
  );
}

export default RightBody;
