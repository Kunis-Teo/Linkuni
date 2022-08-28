import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikeIcon = ({ isLiked }) => {
  const [state, setState] = useState<boolean>(isLiked);
  // 할 수 있따
  const handleIconClick = () => {
    // 여기에다 적어주세요!
    setState((prev) => !prev);
  };

  return (
    <div onClick={handleIconClick}>
      {state ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
};

export default LikeIcon;
