import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon_profile from "../../shared/svg/icon_profile.svg";
import CategoryModal from "./CategoryModal";
import { ReactComponent as IconCategory } from "../../shared/svg/24_ena_category.svg";
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
      <StyleIconCategory
        onClick={() => {
          setIsCategoryShown(!isCategoryShown);
        }}
      />

      {/*로고*/}
      <Logo src="/images/애니메이션2.png"></Logo>

      {/* 로그인/로그아웃 */}
      <StyleLogin
        onClick={() =>
          getCookie("token") === undefined ? nav("/login") : nav("/myPage")
        }
      >
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

const Logo = styled.img`
  max-width: 60px;
`;

const StyleIconCategory = styled(IconCategory)`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0 0.25rem 0.75rem;
  padding: 0.5rem;
  box-sizing: border-box;
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
