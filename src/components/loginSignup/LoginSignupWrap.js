import React from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import submit from "../../common/Confirm";

const LoginSignupWrap = () => {
  // const [cookies, setCookie, removeCookie] = useCookies(["connect.sid"]);
  const nav = useNavigate();
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
            window.location.href =
              "https://accounts.google.com/o/oauth2/auth?client_id=603162325798-hb44n9gjugoc6aoinmb0964ovrqi8uqe.apps.googleusercontent.com&redirect_uri=https://tube-tuning.com/api/google_callback&scope=https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&response_type=code&access_type=offline";
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
