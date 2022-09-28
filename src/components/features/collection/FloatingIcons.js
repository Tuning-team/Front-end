import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../../shared/svg/24_ena_back.svg";
import { ReactComponent as Logo } from "../../../shared/svg/logo.svg";
import { ReactComponent as MoreIcon } from "../../../shared/svg/24_ena_more_main.svg";
const FloatingIcons = ({ setModal }) => {
  const nav = useNavigate();

  return (
    <HeaderContainer>
      <StyleBackIcon
        onClick={() => {
          nav(-1);
        }}
      />
      <StyleLogo />
      <StyleMoreIcon
        onClick={() => {
          setModal((prev) => !prev);
        }}
      />
    </HeaderContainer>
  );
};

export default FloatingIcons;

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
const StyleMoreIcon = styled(MoreIcon)`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0.75rem 0.25rem 0;
  padding: 0.5rem;
  box-sizing: border-box;
`;
