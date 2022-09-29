import React, { Children, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import CategoryModal from "./CategoryModal";
import { ReactComponent as Logo } from "../../shared/svg/logo_without_triangle.svg";
import icon_category from "../../shared/svg/24_ena_category.svg";
import icon_back from "../../shared/svg/24_ena_back.svg";

const Headers = (props) => {
  const nav = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [src, setSrc] = useState(icon_category);
  const leftBtnHandler = () => {
    path === "/mainPage" ? setIsCategoryShown(!isCategoryShown) : nav(-1);
  };
  const [isCategoryShown, setIsCategoryShown] = useState(false);

  useEffect(() => {
    if (path === "/mainPage") {
      setSrc(icon_category);
    } else setSrc(icon_back);
  }, [location]);

  return (
    <>
      {/*카테고리 모달 */}
      {isCategoryShown && (
        <CategoryModal
          setIsCategoryShown={setIsCategoryShown}
          isCategoryShown={isCategoryShown}
        />
      )}

      <Wrap>
        <LeftBtn src={src} onClick={leftBtnHandler} />
        <StyleLogo onClick={() => nav("/mainPage")} />
        <RightBtn>{props.children}</RightBtn>
      </Wrap>
    </>
  );
};

export default Headers;

const Wrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  position: relative;
`;

const LeftBtn = styled.img`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0 0.25rem 0.75rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;
const StyleLogo = styled(Logo)`
  margin-top: 0.688rem;
  height: 1.625rem;
`;
const RightBtn = styled.div`
  font-size: 1rem;
  font-weight: bold;
  width: 4rem;
  letter-spacing: -0.5px;
  color: #572cff;

  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0.25rem 0.75rem 0.25rem 0;
  // padding: 0.5rem;
  box-sizing: border-box;
`;
