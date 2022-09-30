import styled from "styled-components";
import { keyframes } from "styled-components";

const SlideupModal = ({ children, setModal }) => {
  return (
    <Modal onClick={() => setModal((prev) => !prev)}>
      <SlideupBox onClick={(e) => e.stopPropagation()}>
        <CloseBtnArea onClick={() => setModal((prev) => !prev)}>
          <CloseBtn />
        </CloseBtnArea>
        <Children>{children}</Children>
      </SlideupBox>
    </Modal>
  );
};
export default SlideupModal;

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 400;
  @media screen and (max-width: 479px) {
    width: 100vw;
  }
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  min-width: 280px;
  min-height: 100vh;
`;
const slideUp = keyframes`
from{
  transform: translateY(11rem)
}
to{
  transform: translateY(0)
}
`;
const SlideupBox = styled.div`
  padding: 0 1.25rem 2.375rem 1.25rem;
  background-color: #ffffff;
  min-width: 280px;
  @media screen and (max-width: 479px) {
    width: 100vw;
  }
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 20px 20px 0 0;
  animation-name: ${slideUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;
const CloseBtnArea = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
const CloseBtn = styled.div`
  width: 3.625rem;
  height: 0.25rem;
  border-radius: 2px;
  background-color: #adadad;
`;
const Children = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.7rem;
`;
