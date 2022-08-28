import { useState } from "react";
import styled from "styled-components";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <StyledWrapper open={open}>
      <ul>
        <li>훈 ! 짱 !</li>
      </ul>
      <div className="btn" onClick={() => setOpen((prev) => !prev)}>
        버튼
      </div>
    </StyledWrapper>
  );
};

export default SideBar;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 100vh;
  background-color: yellow;

  transform: ${(props) =>
    props.open ? "translateX(0px)" : "translateX(-130px)"};
  
  transition: transform 0.2s linear;

  .btn {
    position: absolute;
    top: 100px;
    right: -60px;
    background: aliceblue;
    padding: 20px;
  }
`;
