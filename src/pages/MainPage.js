import React, { useState } from "react";

import WelcomePage from "./WelcomePage";

import Headers from "../common/Headers";
import MainListWrap from "../components/mainList/MainListWrap";
import Navbar from "../common/Navbar";

const MainPage = () => {
  const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setToggle(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      {toggle ? (
        <WelcomePage></WelcomePage>
      ) : (
        <>
          <Headers />
          <MainListWrap />
          <Navbar />
        </>
      )}
    </>
  );
};
export default MainPage;
