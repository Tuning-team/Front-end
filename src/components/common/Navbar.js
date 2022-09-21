import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../shared/cookie";
import { useDispatch } from "react-redux";
import CategoryModal from "./CategoryModal";
import { ReactComponent as IconCategory } from "../../shared/svg/Icon_category.svg";
import { ReactComponent as IconHome } from "../../shared/svg/Icon_home.svg";
import { ReactComponent as IconCollection } from "../../shared/svg/Icon_collection.svg";
import { getUserInfo } from "../../redux/modules/useSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [isCategoryShown, setIsCategoryShown] = useState(false);

  useEffect(() => {
    if (
      getCookie("token") !== null &&
      localStorage.getItem("userInfo") === null
    ) {
      dispatch(getUserInfo());
    }
  }, []);

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
          }}
          test
        >
          <IconCategory fill="black" />
          <Name>카테고리</Name>
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
              nav("/myCollection");
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
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 360px;
  z-index: 100;
  box-sizing: border-box;
  height: 4.5rem;
  margin: 0 auto;
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
