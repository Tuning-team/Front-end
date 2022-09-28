import React from "react";
import styled from "styled-components";
import Frame from "../../../shared/svg/logo.svg";
import icon_back_enabled from "../../../shared/svg/24_ena_back.svg";
import { useNavigate } from "react-router-dom";

const HeaderLogo = () => {
  const nav = useNavigate();
  return (
    <Title>
      <IconBack src={icon_back_enabled} alt="icon" onClick={() => nav(-1)} />
      <TitleLogo src={Frame} alt="icon" />
      <TitleSubmit></TitleSubmit>
    </Title>
  );
};
export default HeaderLogo;

const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  position: relative;
  background-color: white;
`;
const IconBack = styled.img`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0 0.25rem 0.75rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const TitleLogo = styled.img`
  margin-top: 0.688rem;
  height: 1.625rem;
`;
const TitleSubmit = styled.div`
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
