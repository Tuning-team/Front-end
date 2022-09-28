import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../shared/cookie";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../redux/modules/userSlice";
import CategoryModal from "./CategoryModal";
import { ReactComponent as HomeIcon } from "../../shared/svg/24_ena_home.svg";
import { ReactComponent as CategoryIcon } from "../../shared/svg/24_ena_category.svg";
import { ReactComponent as MyIcon } from "../../shared/svg/24_ena_my.svg";
import { ReactComponent as SearchIcon } from "../../shared/svg/24_ena_search.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [isCategoryShown, setIsCategoryShown] = useState(false);

  useEffect(() => {
    if (getCookie("token") !== undefined) {
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
        <StyleHomeIcon onClick={() => nav("/mainPage")} />
        <StyleCategoryIcon
          onClick={() => {
            setIsCategoryShown(!isCategoryShown);
          }}
        />
        <StyleSearchIcon
          onClick={() => {
            nav("/search");
          }}
        />
        <StyleMyIcon
          onClick={() => {
            nav("/myPage");
          }}
        />
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  border: 1px solid red;
  * {
    border: 1px solid green;
  }
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  z-index: 300;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 479px) {
    width: 100vw;
    font-size: 22px;
  }
  min-width: 280px;
  height: 4.7rem;
  width: 480px;
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
  height: 2.5rem;
  width: 2.5rem;

  padding: 0.5rem;
`;
const StyleMyIcon = styled(MyIcon)`
  height: 2.5rem;
  width: 2.5rem;

  padding: 0.5rem;
`;
const StyleSearchIcon = styled(SearchIcon)`
  height: 2.5rem;
  width: 2.5rem;

  padding: 0.5rem;
`;
