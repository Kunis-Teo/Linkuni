/* eslint-disable */
import React from "react";
import {cssTransition, ToastContainer,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import "./Toast.css";

// 웹텀 토스트 시간 설정입니다 ms / 'FALSE' 값을 넣게되면 토스트를 강제로 닫아야합니다
export const WEBTERM_TOAST_CLOSETIME = 3000;

const _Container = styled(ToastContainer)`
  width: auto;
  min-width: 300px;
  max-width: 400px;
  height: 48px;
  z-index: 999999;
  position: absolute;
  top: 10em;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 16px;
  border-radius: 4px;

  //*************************************************************
  // 경우에 따른 toast-Style 처리 : {default,info,success,warning,error}
  //*************************************************************
  .Toastify__toast--default {
  }
  .Toastify__toast--info {
  }
  .Toastify__toast--success {
    background: #7a5ccd;
    box-shadow: 0 3.5px 9.5px 0 rgba(17, 97, 99, 0.16);
  }
  .Toastify__toast--warning {
    background: #dda148;
    box-shadow: 0 3.5px 9.5px 0 rgba(17, 97, 99, 0.16);
  }
  .Toastify__toast--error {
    background: #d45959;
    box-shadow: 0 3.5px 9.5px 0 rgba(17, 97, 99, 0.16);
  }

  white-space: pre-wrap;
  //*************************************************************
`;

/** ****************************************************************
 * UI 창을 띄우긴 위한 toast 라이브러리 사용 컴포넌트(로베)
 *
 * position : 종류 {top-right,top-right,bottom-left,bottom-center,bottom-right ....}
 * autoClose
 * hideProgressBar
 * newestOnTop
 * closeOnClick
 * rtl
 * pauseOnFocusLoss
 * draggable
 * pauseOnHover
 * theme : theme 색깔 입히기
 * transition : defaultStyle :[Slide, Zoom, Flip, Bounce]
 *
 *
 * react-toastify : https://fkhadra.github.io/react-toastify/introduction/
 **************************************************************** */
function Toast() {
  const customSlide = cssTransition({
    enter: "fadeIn",
    exit: "fadeOut",
  });
  return (
      // eslint-disable-next-line react/jsx-pascal-case
    <_Container
      position="top-center"
      autoClose={1000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={customSlide}
      limit={1}
    />
  );
}

export default Toast;
