import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookie } from "../../shared/cookie";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../redux/modules/userSlice";
import CategoryModal from "./CategoryModal";
import { ReactComponent as HomeIcon } from "../../shared/svg/24_ena_home.svg";
import { ReactComponent as CategoryIcon } from "../../shared/svg/24_ena_category_nav.svg";
import { ReactComponent as SearchIcon } from "../../shared/svg/24_ena_search.svg";
import { ReactComponent as MyIcon } from "../../shared/svg/24_ena_my.svg";

const Navbar = () => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [isCategoryShown, setIsCategoryShown] = useState(false);
  const [onMain, setOnMain] = useState("#505050");
  const [onCategory, setOnCategory] = useState("#505050");
  const [onSearch, setOnSearch] = useState("#505050");
  const [onMyPage, setOnMyPage] = useState("#505050");

  useEffect(() => {
    if (getCookie("token") !== undefined) {
      dispatch(getUserInfo());
    }
    if (location.includes("/mainPage")) {
      setOnMain("#572cff");
    } else if (location.includes("/category")) {
      setOnCategory("#572cff");
    } else if (location.includes("/search")) {
      setOnSearch("#572cff");
    } else if (
      location.includes("/myPage") ||
      location.includes("/myCollection")
    ) {
      setOnMyPage("#572cff");
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
        <StyleHomeIcon onClick={() => nav("/mainPage")} fill={onMain} />
        <StyleCategoryIcon
          onClick={() => {
            setIsCategoryShown(!isCategoryShown);
          }}
          fill={onCategory}
        />
        <StyleSearchIcon
          onClick={() => {
            nav("/search");
          }}
          fill={onSearch}
        />
        <StyleMyIcon
          onClick={() => {
            nav("/myPage/myCollection");
          }}
          fill={onMyPage}
        />
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: fixed;
  z-index: 300;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  height: 4.7rem;
  width: 480px;
  min-width: 280px;
  @media screen and (max-width: 479px) {
    width: 100vw;
  }

  padding: 0.5rem 1.5rem 0 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
`;

const StyleCategoryIcon = styled(CategoryIcon)`
  height: 3rem;
  width: 3rem;
  padding: 0.5rem;
`;
const StyleHomeIcon = styled(HomeIcon)`
  height: 3rem;
  width: 3rem;
  padding: 0.5rem;
`;
const StyleMyIcon = styled(MyIcon)`
  height: 3rem;
  width: 3rem;
  padding: 0.5rem;
`;
const StyleSearchIcon = styled(SearchIcon)`
  height: 3rem;
  width: 3rem;
  padding: 0.5rem;
`;
