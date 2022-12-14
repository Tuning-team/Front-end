import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../shared/icon/24_ena_close.svg";
const Modal = (props) => {
  const closeModal = () => {
    props.setModal((prev) => !prev);
  };

  return (
    <ModalBackground
      onClick={closeModal}
      backdrop={props.backdrop}
      borderRadius={props.borderRadius}
    >
      <ModalContainer onClick={(e) => e.stopPropagation()} width={props.width}>
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
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: ${(props) => props.backdrop || "blur(4px)"};
  border-radius: ${(props) => props.borderRadius || "0"};
  /* 16 16 0 0  */
  @media screen and (max-width: 479px) {
    width: 100vw;
  }
  @media screen and (min-width: 480px) {
    width: 480px;
  }
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  user-select: none;
  width: ${(props) => props.width || "18.5rem"};
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
