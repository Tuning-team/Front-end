import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { getCookie, removeCookie } from "../../../shared/cookie";

const LoginSignupWrap = () => {
  const nav = useNavigate();

  return (
    <LoginWrap>
      <ContentWrap>
        <Title>Welcome to</Title>
        <Logo>Tuning</Logo>
        {getCookie("token") === undefined ? (
          <GoogleLoginButton
            onClick={() => {
              window.location.href = "https://tube-tuning.com/api/google";
            }}
            style={{
              width: "18.75rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              backgroundColor: "#f8f8f8",
              fontSize: "14px",
              marginTop: "15px",
            }}
          >
            구글 로그인
          </GoogleLoginButton>
        ) : (
          <GoogleLoginButton
            onClick={() => {
              removeCookie("token");
              localStorage.removeItem("userInfo");
              if (getCookie("token") === undefined) {
                alert("로그아웃 되었습니다");
                nav("/");
              } else window.reload();
            }}
            style={{
              width: "18.75rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              backgroundColor: "#f8f8f8",
              fontSize: "14px",
              marginTop: "15px",
            }}
          >
            로그아웃 하기
          </GoogleLoginButton>
        )}
      </ContentWrap>
    </LoginWrap>
  );
};
export default LoginSignupWrap;

const LoginWrap = styled.div`
  // align-items: center;
  // margin: auto;
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  // position: absolute;
  // position: absolute;
  // left: 10%;
  // right: 10%;
  // top: 50;
  // top: 35%;
`;

const ContentWrap = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;
  // width: 18.75rem;
  // height: 12.75rem;
`;
const Header = styled.h1`
  // font-style: normal;
  // font-weight: 700;
  // font-size: 24px;
  // line-height: 123.8%;
  // padding: 5px;
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
  font-size: 50px;
  line-height: 123.8%;
  padding: 5px;
  color: transparent;
  background: linear-gradient(90deg, #b295e9 0%, #8179f2 100%);
  -webkit-background-clip: text;
`;
