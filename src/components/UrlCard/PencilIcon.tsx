import React from "react";
import { BsPencilFill } from "react-icons/bs";

// open modal 로직
function Pencil() {
  return (
    <div onClick={() => alert("수정기능은 아직이에요 :(")}>
      <BsPencilFill />
    </div>
  );
}
export default Pencil;
