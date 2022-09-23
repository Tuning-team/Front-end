import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon_profile from "../../shared/svg/icon_profile.svg";
import CategoryModal from "./CategoryModal";
import { ReactComponent as IconCategory } from "../../shared/svg/Icon_category.svg";
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
      <StLeft>
        {/*카테고리 아이콘 */}
        <IconCategory
          onClick={() => {
            setIsCategoryShown(!isCategoryShown);
          }}
        />
        {/*로고*/}
        <Logo src="/images/애니메이션2.png"></Logo>
      </StLeft>
      {/*마이페이지 아이콘 */}
      <IconMyPage
        src={icon_profile}
        onClick={() =>
          getCookie("token") === undefined ? nav("/login") : nav("/myPage")
        }
      />
    </Wrap>
  );
};

export default Headers;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
`;
const StLeft = styled.div``;
const Logo = styled.img`
  max-width: 60px;
`;

const IconMyPage = styled.img``;
