import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  isStared: boolean;
  cardId: number;
}

const LikeIcon = ({ isStared, cardId }: Props) => {
  const [state, setState] = useState<boolean>(isStared);

  const handleIconClick = () => {
    setState((prev) => !prev);
  };

  return (
    <div onClick={handleIconClick}>
      {state ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
};

export default LikeIcon;
