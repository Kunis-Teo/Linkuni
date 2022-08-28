import React from 'react';
import { ModalWrapper } from './Modal.styled';

const Modal = () => {
  return (
    <ModalWrapper>
      <div>
        <h3>수정하기</h3> 
        <input></input>
        <button>SAVE</button>
      </div>
    </ModalWrapper>
  );
};

export default Modal;