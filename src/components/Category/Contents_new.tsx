import React, { useState } from 'react';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { ContentsContainer } from './Contents_new.styled';
import Modal from './Modal';

const Contents = () => {
  const [open, setOpen] = useState(false);

  return (
    <ContentsContainer>      
      <div className='title'>
        <div>
          <input className='categoryName' type='text' value='프론트엔드' readOnly/>
          <span>(21)</span>
        </div>
        <div className='icons'>
          <MdOutlineModeEditOutline 
            className='edit'
            onClick={() => setOpen(prev => !prev)}
          />
          <RiDeleteBinLine className='delete'/>
        </div>
      </div>   
      {open && <Modal/>}
    </ContentsContainer>
  );
};


export default Contents;