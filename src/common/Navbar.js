import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../hooks/cookie";
import CategoryModal from "./CategoryModal";
import { ReactComponent as IconCategory } from "../svg/Icon_category.svg";
import { ReactComponent as IconHome } from "../svg/Icon_home.svg";
import { ReactComponent as IconCollection } from "../svg/Icon_collection.svg";
import { ReactComponent as IconSearch } from "../svg/Icon_search.svg";

const Navbar = () => {
  const nav = useNavigate();

  const [isCategoryShown, setIsCategoryShown] = useState(false);
  const [test, setTest] = useState(null);

  return (
    <>
      {isCategoryShown && (
        <CategoryModal
          setIsCategoryShown={setIsCategoryShown}
          isCategoryShown={isCategoryShown}
        />
      )}
      <Nav>
        <Wrap
          onClick={() => {
            setIsCategoryShown(!isCategoryShown);
            setTest("danger");
          }}
          test
        >
          <IconCategory fill="black" />
          <Name>카테고리</Name>
        </Wrap>
        <Wrap onClick={() => nav("/search")}>
          <IconSearch fill="black" />
          <Name>검색</Name>
        </Wrap>
        <Wrap onClick={() => nav("/")}>
          <IconHome fill="#efefef" />
          <Name>메인</Name>
        </Wrap>
        <Wrap
          onClick={() => {
            if (getCookie("token") === undefined) {
              alert("로그인을 해주세요");
              nav("/login");
            } else {
              nav("/mypage");
            }
          }}
        >
          <IconCollection fill="#efefef" />
          <Name>내튜닝</Name>
        </Wrap>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 100;

  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  height: 4.5rem;

  background-color: #efefef;
`;
const Name = styled.span`
  margin-top: 3px;
`;
const Wrap = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  cursor: pointer;
  align-items: center;
  background-color: ${(props) => (props.danger ? "white" : null)};
`;
