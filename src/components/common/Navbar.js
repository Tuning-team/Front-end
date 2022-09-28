import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../shared/cookie";
import { useDispatch } from "react-redux";
import CategoryModal from "./CategoryModal";
import { ReactComponent as HomeIcon } from "../../shared/svg/icon_home.svg";
import { getUserInfo } from "../../redux/modules/userSlice";
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
        <Wrap
          onClick={() => {
            setIsCategoryShown(!isCategoryShown);
          }}
          test
        >
          <StyleCategoryIcon
            onClick={() => {
              setIsCategoryShown(!isCategoryShown);
            }}
          />
        </Wrap>

        <Wrap onClick={() => nav("/mainPage")}>
          <StyleHomeIcon />
        </Wrap>
        <Wrap
          onClick={() => {
            nav("/search");
          }}
        >
          <StyleSearchIcon />
        </Wrap>
        <Wrap
          onClick={() => {
            //   if (getCookie("token") === undefined) {
            //     alert("로그인을 해주세요");
            //     nav("/login");
            //   } else {
            nav("/myPage");
            //   }
          }}
        >
          <StyleMyIcon />
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
  left: 50%;
  transform: translateX(-50%);
  min-width: 360px;
  width: 480px;
  z-index: 300;
  height: 4.7rem;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
`;

const Wrap = styled.div`
  // padding-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  cursor: pointer;
  align-items: center;
  background-color: ${(props) => (props.danger ? "white" : null)};
`;
const StyleCategoryIcon = styled(CategoryIcon)`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0 0.25rem 0.75rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;
const StyleHomeIcon = styled(HomeIcon)`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0 0.25rem 0.75rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;
const StyleMyIcon = styled(MyIcon)`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0 0.25rem 0.75rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;
const StyleSearchIcon = styled(SearchIcon)`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0 0.25rem 0.75rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;
