import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <StyleLayout>{children}</StyleLayout>;
};
export default Layout;

const StyleLayout = styled.div`
  max-width: 360px;
  /* min-width: 360px; */
  border: 1px solid green;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
`;
