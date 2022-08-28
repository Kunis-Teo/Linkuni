import React from 'react';
import { Container } from './Category.styled';
import {BsBookmarksFill} from 'react-icons/bs';
import PinIcon from './PinIcon';


const 가라데이터 = [
  "프론트엔드",
  "Recipes",
  "개발",
  "자기관리",
  "스터디",
  "운동"
] as const 


const Category = () => {
  return (
    <Container> 
      <BsBookmarksFill className='bookmark' />
      <ul className='ul'>
        {가라데이터.map((제목)=>
          (
            <li className='list'><PinIcon isPined={false}/>{제목}</li>
          )
        )}
      </ul>
    </Container>    
  );
};


export default Category;