import styled from "styled-components";
import { keyframes } from "styled-components";
const SlideupModal = ({ children, setModal }) => {
  return (
    <Modal>
      <SlideupBox>
        <CloseBtn onClick={() => setModal((prev) => !prev)} />
        <Children>{children}</Children>
      </SlideupBox>
    </Modal>
  );
};
export default SlideupModal;

const slideUp = keyframes`
from{
  transform: translateY(100px)
}
to{
  transform: translateY(0px)
}
`;

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px black;
  position: fixed;
  top: -6%;
  left: 0%;
  width: 100%;
  height: 200%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SlideupBox = styled.div`
  background-color: #ffffff;
  width: 22.063rem;
  height: 8.938rem;
  color: #b295e9;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 10px 10px 0 0;

  animation-duration: 0.3s;
  // animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;
const CloseBtn = styled.div`
  width: 40px;
  height: 3px;
  background-color: gray;
`;
const Children = styled.div`
  margin-bottom: 30px;
`;
