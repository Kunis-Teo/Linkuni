import React from 'react';

import RightBody from '@/components/RightBody/RightBody';
import Category from '@/components/Category/Category';
import Contents from '@/components/Category/Contents_new';

import { Wrapper } from './App.styled';

function App() {
  return (
    <Wrapper>
      <Category />
      <RightBody />
      <Contents />
    </Wrapper>
  );
}

export default App;
