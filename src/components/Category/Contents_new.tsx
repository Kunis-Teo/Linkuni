import React, { useState } from 'react';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { ContentsContainer } from './Contents_new.styled';
import Modal from './Modal';

function Contents() {
  const [open, setOpen] = useState(false);

  return (
    <ContentsContainer>
      <div className="contents-header">
        <div className="title">
          <input className="category-name" type="text" value="프론트엔드" readOnly />
          <span>(21)</span>
        </div>
        <div className="icons">
          <MdOutlineModeEditOutline
            className="edit"
            onClick={() => setOpen((prev) => !prev)}
          />
          {open && <Modal />}
          <RiDeleteBinLine className="delete" />
        </div>
      </div>
    </ContentsContainer>
  );
}

export default Contents;
