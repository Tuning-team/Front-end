import React, { useEffect, useState } from "react";

import Headers from "../common/Headers";
import MainListWrap from "../components/mainList/MainListWrap";
import Navbar from "../common/Navbar";
import WelcomePage from "./WelcomePage";
import styled from "styled-components";
// import orders : React > package > modules > hooks > component > css
// logis orders : useState > useRef > dispatch > navigate > useSelector > extra..
const MainPage = () => {
  const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setToggle(false);
  //   }, 2000);
  // }, []);

  return (
    <Layout>
      {toggle ? (
        <WelcomePage></WelcomePage>
      ) : (
        <>
          <Headers />
          <MainListWrap />
          <Navbar />
        </>
      )}
    </Layout>
  );
};
export default MainPage;
const Layout = styled.div`
  margin-bottom: 6.625rem;
`;
