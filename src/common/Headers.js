import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../elements/Button";

const Headers = () => {
  const nav = useNavigate();
  return (
    <Header>
      <div>Tuning</div>
      <Button onClick={() => nav("/login")}>로그인</Button>
    </Header>
  );
};

export default Headers;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
