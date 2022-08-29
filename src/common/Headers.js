import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Headers = () => {
  const nav = useNavigate();
  return (
    <Header>
      <div>Tunning</div>
      <button onClick={() => nav("/login")}>로그인</button>
    </Header>
  );
};

export default Headers;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
