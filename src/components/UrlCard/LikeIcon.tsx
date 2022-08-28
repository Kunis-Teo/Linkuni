import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  isStared: boolean;
  cardId: number;
}

function LikeIcon({ isStared, cardId }: Props) {
  const [state, setState] = useState<boolean>(isStared);

  const handleIconClick = () => {
    setState((prev) => !prev);
    console.log(cardId);
  };

  return (
    <div onClick={handleIconClick}>
      {state ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
}

export default LikeIcon;
