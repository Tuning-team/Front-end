import React from "react";
import styled from "styled-components";
import DesktopBackground from "./DesktopBackground.js";

const Layout = (props) => {
  return (
    <>
      <DesktopBackground />
      <StyleLayout>{props.children}</StyleLayout>
    </>
  );
};
export default Layout;

const StyleLayout = styled.div`
  position: relative;
  background-color: #fff;
  /* border: 1px solid red; */
  @media screen and (max-width: 479px) {
    width: 100vw;
  }
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  min-width: 280px;
  min-height: 100vh;
  padding-bottom: 4.7rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
`;
