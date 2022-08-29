import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';

import { Wrapper, PersonIconWrapper } from './Header.styled';

function Header() {
  return (
    <Wrapper>
      <PersonIconWrapper>
        <BsPersonCircle size={30} />
      </PersonIconWrapper>
    </Wrapper>
  );
}

export default Header;
