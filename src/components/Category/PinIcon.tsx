import React, { useState } from 'react';
import {BsPinFill, BsPin} from 'react-icons/bs';
import { PinIconWrapper } from './Category.styled';

const PinIcon = ({isPined}) => {
  const [state, setState] = useState(isPined);

  const handelPinClick = () => {
    setState(prev => !prev);
  }

  return (
    <PinIconWrapper onClick={handelPinClick}>
      {state ? <BsPinFill/> : <BsPin/>}
    </PinIconWrapper>
  );
};

export default PinIcon;