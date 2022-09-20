import React from "react";
import styled from "styled-components";

const Modal = ({ children }) => {
  // if (!show) {
  //   return null;
  // }
  return (
    <ModalBackground>
      <ModalContainer>
        <CloseModalButton>&times;</CloseModalButton>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
};
export default Modal;
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 1rem;
  background-color: white;
  border-radius: 6px;
  user-select: none;
`;

const CloseModalButton = styled.div`
  position: absolute;
  right: 10px;
  top: 6px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;
