import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../../shared/cookie";
import ToastNotification from "../../common/ToastNotification";

const LoginSignupWrap = () => {
  const [toastState, setToastState] = useState(false);
  const [alert, setAlert] = useState("튜닝추천을 위해 로그인을 해주세요");
  useState(() => {
    if (!getCookie("token")) {
      setAlert("튜닝추천을 위해 로그인을 해주세요");
      setToastState(true);
    }
  }, []);
  //!로그아웃 오류 수정필요
  const loginHandler = async () => {
    setAlert("로그아웃이 되었습니다.");
    removeCookie("token");
    localStorage.removeItem("userInfo");

    setTimeout(() => {
      if (getCookie("token") !== undefined) {
        alert("로그아웃오류입니다");
        setToastState(true);
        console.log(getCookie("token"));
      } else {
        setToastState(true);
        window.location.href = "/";
      }
    }, 1500);
    console.log(getCookie("token"));
  };

  return (
    <LoginWrap>
      {getCookie("token") === undefined ? (
        <ContentWrap>
          <Header>로그인</Header>
          <LoginBtn
            onClick={() => {
              window.location.href = "https://tube-tuning.com/api/google";
            }}
          >
            <Logo src="./images/logo_google.png" alt="logo" />
            SIGN IN WITH GOOGLE
          </LoginBtn>{" "}
        </ContentWrap>
      ) : (
        <ContentWrap>
          <Header>로그아웃</Header>
          <LoginBtn onClick={loginHandler}>
            <Logo src="./images/logo_google.png" alt="logo" />
            SIGN OUT WITH GOOGLE
          </LoginBtn>
        </ContentWrap>
      )}
      {toastState && (
        <ToastNotification setToastState={setToastState}>
          {alert}
        </ToastNotification>
      )}
    </LoginWrap>
  );
};
export default LoginSignupWrap;

const LoginWrap = styled.div`
  width: 22.438rem;
  height: 30.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 18.75rem;
`;
const Header = styled.div`
  font-size: 1.638rem;
  font-weight: 700;
  letter-spacing: 1.55px;
  width: 18.75rem;
  text-align: center;
`;

const LoginBtn = styled.div`
  width: 14.625rem;
  height: 2.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 0.75rem;
  margin-top: 15px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  color: #adadad;
  &:active {
    background-color: white;
    opacity: 1;
    font-weight: 900;
  }
`;
const Logo = styled.img`
  width: 1.375rem;
  height: 1.375rem;
  margin: 0 1.5rem 0 0;
`;
