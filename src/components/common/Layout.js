import React from "react";
import styled from "styled-components";
import tuningLogo from "../../shared/svg/icon_welcome.svg";
const Layout = ({ children }) => {
  return (
    <>
      <LogoContainer>
        <img src={tuningLogo} alt="tuningLogo" />
        <h1>내가 모은 영상 플레이 리스트를 내 방식대로 편하게 보관하자!</h1>
      </LogoContainer>
      <Line></Line>
      <StyleLayout>{children}</StyleLayout>
    </>
  );
};
export default Layout;
const StyleLayout = styled.div`
  position: relative;

  max-width: 360px;
  min-width: 360px;
  background-color: #fff;
`;
const LogoContainer = styled.div`
  position: fixed;
  top: 48%;
  right: 50%;
  transform: translate(-50%, -48%);
  width: 20%;
  & img {
    width: 50%;
    height: auto;
  }
  & h1 {
    font-family: "Noto Sans KR";
    font-size: 200%;
    font-weight: 500;
    letter-spacing: -0.7px;
    color: #505050;
  }
`;
const Line = styled.div`
  background-color: var(--color-primary);
  height: 0.313rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 39%;
  z-index: -1;
`;
