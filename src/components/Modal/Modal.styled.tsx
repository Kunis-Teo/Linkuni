import styled, { css, keyframes } from "styled-components";

export const keyframeSlideUp = keyframes`
from {
  transform: translateY(400px);
}
to {
  transform: translateY(0px);
}
`;
export const keyframeSlideDown = keyframes`
from {
  transform: translateY(0px);
}
to {
  transform: translateY(400px);
}
`;

export const keyframeFadeIn = keyframes`
from{
  opacity:0;
} to{
  opacity:1;
}
`;

export const keyframeFadeOut = keyframes`
from{
  opacity:1;
} to{
  opacity:0;
}
`;

export const StyledMask = styled.div<{ close: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  align-items: center;
  background: rgba(0, 0, 0, 0.6);

  ${({ close }) => {
    return css`
      opacity: ${close ? 0 : 1};
      animation: ${close ? keyframeFadeOut : keyframeFadeIn} 0.25s;
    `;
  }}
`;

export const StyledModalWrapper = styled.div<{ close: boolean }>`
  ${({ close }) => {
    return css`
      animation: ${close ? keyframeSlideDown : keyframeSlideUp} 0.25s;
    `;
  }}
  background: whitesmoke;
  border-radius: 10px;
  position: relative;
  height: 420px;
  width: 300px;
  padding: 25px;

    .button-group {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
`;
