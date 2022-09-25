import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../shared/svg/Frame.svg";
import { ReactComponent as BackIcon } from "../../../shared/svg/icon_back.svg";
import { getCookie } from "../../../shared/cookie";

const SearchHeaders = () => {
  const nav = useNavigate();
  const [isCategoryShown, setIsCategoryShown] = useState(false);

  return (
    <Wrap>
      <StBackIcon
        src={BackIcon}
        alt="icon" onClick={() => nav(-1)} />
      <StLogo />
      <StyleLogin onClick={() => nav("/login")}>
        {getCookie("token") === undefined ? "로그인" : "로그아웃"}
      </StyleLogin>
    </Wrap>
  );
};

export default SearchHeaders;

const Wrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  position: relative;
  margin-top: 0.75rem;
`;

const StBackIcon = styled(BackIcon)`
  margin-top: 0.688rem;
  width: 1.5rem;
  height: 1.5rem;
`;
const StLogo = styled(Logo)`
  margin-top: 0.688rem;
  height: 1.625rem;
`;
const StyleLogin = styled.div`
  font-size: 0.625rem;
  font-weight: 500;
  width: 2.5rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  color: #572cff;

  margin-right: 0.75rem;
  display: flex;
  align-items: center;
`;
