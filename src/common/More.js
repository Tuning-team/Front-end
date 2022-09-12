import styled from "styled-components";

const More = ({ children }) => {
  return <Modal>{children}</Modal>;
};
export default More;

const Modal = styled.div`
  background-color: rgba(245, 245, 245, 0.96);
  border: 1px black;
  position: absolute;
  left: 78%;
  top: 3%;
  width: 3rem;
  height: 3rem;
  z-index: 999;
`;
