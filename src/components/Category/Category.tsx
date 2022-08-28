import React, { useState } from 'react';
import { BsBookmarksFill } from 'react-icons/bs';
import { StyledWrapper } from './Category.styled';
import PinIcon from './PinIcon';

function Category() {
  const [open, setOpen] = useState<boolean>(true);

  const 가라데이터 = [
    '프론트엔드',
    'Recipes',
    '개발',
    '자기관리',
    '스터디',
    '운동',
  ] as const;

  return (
    <StyledWrapper open={open}>
      <ul className="ul">
        {가라데이터.map((제목) => (
          <li className="list">
            <PinIcon isPined={false} />
            <span onClick={() => setOpen((prev) => !prev)}>{제목}</span>
          </li>
        ))}
      </ul>
      <div className="bookmark-button" onClick={() => setOpen((prev) => !prev)}>
        <BsBookmarksFill className="mobile-bookmark" />
      </div>
    </StyledWrapper>
  );
}

export default Category;
