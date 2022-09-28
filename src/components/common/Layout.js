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
  border: 1px solid red;
  @media screen and (max-width: 479px) {
    width: 100vw;
  }
  min-width: 360px;
  max-width: 480px;
  min-height: 100vh;
`;
