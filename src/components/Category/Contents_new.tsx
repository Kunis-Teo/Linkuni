import React, { useRef, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { ContentsContainer } from './Contents_new.styled';

function Contents() {
  const [inputValue, setInputValue] = useState<string>('프론트엔드');
  const [isEditChecked, setIsEditChecked] = useState<boolean>(false);
  const nameInput = useRef<any>();

  const handleEdit = () => {
    setIsEditChecked((prev) => !prev);
    nameInput?.current?.focus();
  };

  const handleCheck = () => {
    // 백엔드 통신.. 카테고리 수정 axios
    console.log(`수정 완료! ${inputValue}`);
  };

  const handleDelete = () => {
    const answer = window.confirm(`${inputValue} 카테고리를 삭제하시겠습니까?`);
    if (answer) {
      // 백엔드 통신.. 카테고리 삭제
      console.log(`삭제 완료.`);
    }
  };

  return (
    <ContentsContainer>
      <div className="contents-header">
        <div className="title">
          <input
						className="category-name"
						ref={nameInput}
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
          <span>(21)</span>
        </div>
        <div className="icons">
          {isEditChecked ? (
            <BsCheckLg onClick={handleCheck} />
          ) : (
            <MdOutlineModeEditOutline className="edit" onClick={handleEdit} />
          )}
          <RiDeleteBinLine className="delete" onClick={handleDelete} />
        </div>
      </div>
    </ContentsContainer>
  );
}

export default Contents;
