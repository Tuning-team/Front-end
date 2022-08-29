import React from "react";

import FamousCollections from "./FamousCollections";
import UserCollections from "./UserCollections";
import RandomCollections from "./RandomCollections";

import styled from "styled-components";
// import orders : React > package > modules > hooks > component > css
// logis orders : useState > useRef > dispatch > navigate > useSelector > extra..
const MainListWrap = () => {
  return (
    <>
      <FamousCollections />
      <UserCollections />
      <RandomCollections />
    </>
  );
};

export default MainListWrap;
