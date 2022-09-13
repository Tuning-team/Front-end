import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../elements/Button";
import icon_profile from "../svg/icon_profile.svg";

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
  right: 0%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  width: 1.9rem;
  height: 1.9rem;
`;
const Icon = styled.img``;
