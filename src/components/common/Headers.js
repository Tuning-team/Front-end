import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon_profile from "../../shared/svg/icon_profile.svg";

const Headers = () => {
  const nav = useNavigate();
  return (
    <Header>
      <Icon src={icon_profile} onClick={() => nav("/login")} />
    </Header>
  );
};

export default Headers;

const Header = styled.div`
  position: absolute;
  z-index: 1;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: flex-end;
  width: 1.9rem;
  height: 1.9rem;
`;
const Icon = styled.img``;
