import React from "react";
import { AiFillDelete } from "react-icons/ai";

// 삭제하시겠습니까 ?
function Delete() {
  return (
    <div
      onClick={() => {
        // eslint-disable-next-line
        confirm("이 카드를 삭제하시겠습니까?");
        alert("삭제는 아직이에요 :(");
      }}
    >
      <AiFillDelete />
    </div>
  );
}
export default Delete;
