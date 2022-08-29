import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const nav = useNavigate();
  return (
    <Nav>
      <div>카테고리</div>
      <div>검색</div>
      <div onClick={() => nav("/")}>메인</div>
      <div>내컬렉션</div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  /* 화면 하단에 navbar위치 고정 */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;
  height: 2rem;

  padding: 10px;

  /* 나중에 지울 코드 */
  & div {
    background-color: pink;
  }
`;
