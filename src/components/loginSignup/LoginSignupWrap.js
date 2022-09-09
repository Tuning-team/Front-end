import React from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginSignupWrap = () => {
  // const [cookies, setCookie, removeCookie] = useCookies(["connect.sid"]);
  const nav = useNavigate();
  return (
    <>
      <Title
        onClick={() => {
          nav(-1);
        }}
      >
        &lt;
      </Title>
      <h2>Welcome to Tuning</h2>
      <GoogleLoginButton
        onClick={() => {
          window.location.href =
            "https://accounts.google.com/o/oauth2/auth?client_id=603162325798-hb44n9gjugoc6aoinmb0964ovrqi8uqe.apps.googleusercontent.com&redirect_uri=https://tube-tuning.com/api/google_callback&scope=https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&response_type=code&access_type=offline";
        }}
      >
        구글 로그인
      </GoogleLoginButton>
    </>
  );
};
export default LoginSignupWrap;
const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 123.8%;
  padding: 5px;
`;
