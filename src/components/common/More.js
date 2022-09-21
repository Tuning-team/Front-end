import styled from "styled-components";

const More = ({ children }) => {
  return <Modal>{children}</Modal>;
};
export default More;

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px black;
  position: fixed;
  top: -10%;
  left: 0%;
  width: 100%;
  height: 200%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
