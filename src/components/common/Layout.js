import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <StyleLayout>{children}</StyleLayout>;
};
export default Layout;

const StyleLayout = styled.div`
  max-width: 500px;
  min-height: 100vh;

  position: relative;

  border: 1px solid green;

  padding-bottom: 5rem;
`;
