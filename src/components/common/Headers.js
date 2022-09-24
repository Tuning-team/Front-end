import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CategoryModal from "./CategoryModal";
import { ReactComponent as CategoryIcon } from "../../shared/svg/24_ena_category.svg";
import { ReactComponent as Logo } from "../../shared/svg/Frame.svg";
import { getCookie } from "../../shared/cookie";

const Headers = () => {
  const nav = useNavigate();
  const [isCategoryShown, setIsCategoryShown] = useState(false);

  return (
    <Wrap>
      {/*카테고리 모달 */}
      {isCategoryShown && (
        <CategoryModal
          setIsCategoryShown={setIsCategoryShown}
          isCategoryShown={isCategoryShown}
        />
      )}

      {/*카테고리 아이콘 */}
      <StyleCategoryIcon
        onClick={() => {
          setIsCategoryShown(!isCategoryShown);
        }}
      />

      {/*로고*/}
      <StyleLogo />
      {/* 로그인/로그아웃 */}
      <StyleLogin onClick={() => nav("/login")}>
        {getCookie("token") === undefined ? "로그인" : "로그아웃"}
      </StyleLogin>
    </Wrap>
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

const StyleCategoryIcon = styled(CategoryIcon)`
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
const StyleLogin = styled.div`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #572cff;

  margin-right: 0.75rem;
  display: flex;
  align-items: center;
`;
