import React from "react";
import styled from "styled-components";

const Modal = ({ children, setModal, modal }) => {
  const closeModal = () => {
    setModal((prev) => !prev);
  };

  if (!modal) {
    return null;
  }
  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseModalButton onClick={closeModal}>&times;</CloseModalButton>
        <ModalDesc>{children}</ModalDesc>
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
  z-index: 500;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  padding: 1rem;
  background-color: white;
  border-radius: 6px;
  user-select: none;
  width: 18.5rem;
`;

const CloseModalButton = styled.div`
  position: absolute;
  right: 10px;
  top: 6px;
  display: inline-block;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

const ModalDesc = styled.div`
  display: block;
  margin: 2rem auto;
`;
