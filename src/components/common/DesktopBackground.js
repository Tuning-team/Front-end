import React from "react";
import styled from "styled-components";
import tuningLogo from "../../shared/svg/icon_welcome.svg";

const DesktopBackground = (props) => {
  return (
    <>
      <Desktop classNmae="desktop">
        <img src={tuningLogo} alt="tuningLogo" />
        <h1>내가 모은 영상 플레이 리스트를</h1>
        <h1>내 방식대로 편하게 보관하자!</h1>
      </Desktop>
      <Line />
    </>
  );
};
export default DesktopBackground;

const Desktop = styled.div`
  position: fixed;
  z-index: -1;
  bottom: 42%;
  left: 12%;
  * {
    display: none;
  }
  @media screen and (min-width: 1150px) {
    * {
      display: block;
    }
    & img {
      width: 10.5rem;
      height: auto;
    }
    & h1 {
      font-family: "Noto Sans KR";
      font-size: 1rem;
      font-weight: normal;
      letter-spacing: -0.7px;
      color: #505050;
    }
  }
`;
const Line = styled.div`
  background-color: var(--color-primary);
  height: 1rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 39%;
  z-index: -1;
`;
