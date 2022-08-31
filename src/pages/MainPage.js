import React from "react";

import Headers from "../common/Headers";
import MainListWrap from "../components/mainList/MainListWrap";
import Navbar from "../common/Navbar";

import styled from "styled-components";
// import orders : React > package > modules > hooks > component > css
// logis orders : useState > useRef > dispatch > navigate > useSelector > extra..
const MainPage = () => {
  return (
    <StMainPage>
      <Headers />
      <MainListWrap />
      <Navbar />
    </StMainPage>
  );
};
export default MainPage;
const StMainPage = styled.div`
  padding: 10px;
`;
