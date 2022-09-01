import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryModal from "./CategoryModal";
import styled from "styled-components";

const Navbar = () => {
  const nav = useNavigate();

  const [isCategoryShown, setIsCategoryShown] = useState(false);

  return (
    <>
      {isCategoryShown && (
        <CategoryModal setIsCategoryShown={setIsCategoryShown} />
      )}
      <Nav>
        <div onClick={() => setIsCategoryShown(!isCategoryShown)}>카테고리</div>
        <div onClick={() => nav("/search")}>검색</div>
        <div onClick={() => nav("/")}>메인</div>
        <div onClick={() => nav("/mypage")}>내컬렉션</div>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  /* 화면 하단에 navbar위치 고정 */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 100;

  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;
  height: 3rem;

  background-color: white;

  /* 나중에 지울 코드 */
  & div {
    border: 1px solid red;
    display: block;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
`;
