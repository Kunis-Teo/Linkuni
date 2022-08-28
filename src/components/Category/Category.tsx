import React, { useState, useCallback } from 'react';
import { BsBookmarksFill } from 'react-icons/bs';
import { StyledWrapper } from './Category.styled';
import PinIcon from './PinIcon';

function sorterFn(a, b) {
  if (a.isPined > b.isPined) {
    return -1;
  }
  if (a.isPined < b.isPined) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

const dummyData = [
  { name: '프론트엔드', isPined: false },
  { name: 'Recipes', isPined: false },
  { name: '개발', isPined: false },
  { name: '자기관리', isPined: false },
  { name: '스터디', isPined: false },
  { name: '운동', isPined: false },
];

function Category() {
  const [data, setData] = useState(dummyData);
  const [open, setOpen] = useState(true);

  const createHandlePinClick = useCallback((tagetName) => {
    function aa() {
      /* eslint-disable-next-line */
			setData((prev) => {
        return prev
          .map(({ name, isPined }) => {
            if (name === tagetName) {
              return { name, isPined: !isPined };
            }

            return { name, isPined };
          })
          .sort(sorterFn);
      });
    }

    return aa;
  }, []);
  /* eslint-disable-next-line */
	return (
  <StyledWrapper open={open}>
    <ul className="ul">
      {data.map(({ name, isPined }) => (
        <li className="list">
          <PinIcon isPined={isPined} handelPinClick={createHandlePinClick(name)} />
          <span onClick={() => setOpen((prev) => !prev)}>{name}</span>
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
