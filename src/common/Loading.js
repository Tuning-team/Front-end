import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <>
      <LoadingBox>
        <Dim></Dim>
        <Circle></Circle>
      </LoadingBox>
    </>
  );
};
export default Loading;

const spin = keyframes`
from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;
const LoadingBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 10px solid #fff;
  border-top: 10px solid rgb(10, 106, 239);
  border-radius: 50em;
  transition: all 1s;
  animation-name: ${spin};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
const Dim = styled.div`
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
`;
const Circle = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 10px solid #fff;
  border-top: 10px solid #b295e9;
  border-radius: 50em;
  transition: all 1s;
  animation-name: ${spin};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
