import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../shared/svg/24_ena_close.svg";
const Modal = (props) => {
  const closeModal = () => {
    props.setModal((prev) => !prev);
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {props.modalKeyword && (
          <ModalKeyword>{props.modalKeyword}</ModalKeyword>
        )}
        <CloseModalButton onClick={closeModal}>
          <StyleCloseIcon />
        </CloseModalButton>
        <ModalDesc margin={props.margin}>{props.children}</ModalDesc>
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
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  user-select: none;
  width: 18.5rem;
`;
const ModalKeyword = styled.h2`
  margin: 0;
  font-size: 1.125rem;
  font-weight: bold;
  letter-spacing: -0.9px;
  text-align: left;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #f5f5f5;
`;
const CloseModalButton = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
`;
const StyleCloseIcon = styled(CloseIcon)`
  box-sizing: border-box;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
`;
const ModalDesc = styled.div`
  display: block;
  margin: ${(props) => props.margin || "2rem auto"};
`;
