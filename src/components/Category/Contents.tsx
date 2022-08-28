import React from 'react';
import { ContentsContainer } from './Category.styled';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

const Contents = () => {
  return (
    <ContentsContainer>      
      <div className='title'>
        <h2>
          프론트엔드
        </h2>
        <div className='icons'>
          <MdOutlineModeEditOutline className='edit'/>
          <RiDeleteBinLine className='delete'/>
        </div>
      </div>   
    </ContentsContainer>
  );
};


export default Contents;