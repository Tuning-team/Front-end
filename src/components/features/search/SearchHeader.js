import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../shared/svg/logo_without_triangle.svg";
import { ReactComponent as BackIcon } from "../../../shared/svg/24_ena_back.svg";

const SearchHeaders = () => {
  const nav = useNavigate();

  return (
    <HeaderContainer>
      <StyleBackIcon
        onClick={() => {
          nav(-1);
        }}
      />
      <StyleLogo onClick={() => nav("/mainPage")} />
      <StyleIcon />
    </HeaderContainer>
  );
};

export default SearchHeaders;

const HeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  position: relative;
`;

const StyleBackIcon = styled(BackIcon)`
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
const StyleIcon = styled.div`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0.75rem 0.25rem 0;
  padding: 0.5rem;
  box-sizing: border-box;
`;
