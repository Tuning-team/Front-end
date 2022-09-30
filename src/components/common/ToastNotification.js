import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ToastNotification = (props) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      props.setToastState(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <ToastContainer bottom={props.bottom}>
      <p>{props.children}</p>
    </ToastContainer>
  );
};
export default ToastNotification;

const Vibration = keyframes`
 from {
  transform: translateX(-50%) rotate(1deg);
 }
to {
  transform: translateX(-50%) rotate(-1deg);
}
`;
const ToastContainer = styled.div`
  /* 이름 duration timing-function delay iteration-count fill-mode play-state  */
  /* https://poiemaweb.com/css3-animation 참고 */
  animation: ${Vibration} 0.1s 3;
  /* 위치잡기 */
  position: fixed;
  z-index: 600;
  bottom: ${(props) => props.bottom || "5rem"};
  left: 50%;
  transform: translateX(-50%);
  /* 배경 */
  background-color: rgba(0, 0, 0, 0.9);
  border: none;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  /* 크기 및 간격 */
  min-height: 3rem;
  width: 18.5rem;
  padding: 0 1.25rem;
  /* 텍스트 */
  text-align: center;
  font-size: 1rem;
  font-weight: normal;
  color: white;
  /* 내용 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    margin: 0;
  }
`;
