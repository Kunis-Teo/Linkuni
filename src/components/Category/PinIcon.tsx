import React from 'react';
import { BsPinFill, BsPin } from 'react-icons/bs';
import { PinIconWrapper } from './PinIcon.styled';

function PinIcon({ isPined, handelPinClick }) {
  return (
    <PinIconWrapper onClick={handelPinClick}>
      {isPined ? <BsPinFill /> : <BsPin />}
    </PinIconWrapper>
  );
}

export default PinIcon;
