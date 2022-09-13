import React from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import submit from "../../common/Confirm";

const LoginSignupWrap = () => {
  // const [cookies, setCookie, removeCookie] = useCookies(["connect.sid"]);
  const nav = useNavigate();
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  console.log(parsedHash);
  return (
    <>
      <Header
        onClick={() => {
          // submit();
          nav(-1);
        }}
      >
        &lt;
      </Header>
      <Wrap>
        <Title>Welcome to</Title>
        <Logo>Tuning</Logo>
        <GoogleLoginButton
          onClick={() => {
            window.location.href = "https://api.tube-tuning.com/api/google";
          }}
          style={{ width: "15rem" }}
        >
          구글 로그인
        </GoogleLoginButton>
      </Wrap>
    </>
  );
};
export default LoginSignupWrap;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 123.8%;
  padding: 5px;
`;
const Title = styled.h1`
  font-style: normal;
  font-weight: 100;
  font-size: 40px;
  line-height: 123.8%;
  padding: 5px;
`;
const Logo = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 123.8%;
  padding: 5px;
  color: transparent;
  background: linear-gradient(90deg, #b295e9 0%, #8179f2 100%);
  -webkit-background-clip: text;
`;
