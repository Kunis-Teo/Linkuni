import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikeIcon = ({ isLiked }) => {
  const [state, setState] = useState<boolean>(isLiked);

  const handleIconClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setState((prev) => !prev);
  };

  return (
    <div onClick={handleIconClick}>
      {state ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
};

export default LikeIcon;
