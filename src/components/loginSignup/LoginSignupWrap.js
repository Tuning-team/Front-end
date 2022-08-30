import React from "react";
import { Input } from "../../elements/Input";
import { GoogleLoginButton } from "react-social-login-buttons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSignupWrap = () => {
  const nav = useNavigate();

  //!구글로그인 함수

  return (
    <>
      <a href="https://accounts.google.com/signin/oauth/error?authError=Cg9pbnZhbGlkX3JlcXVlc3QSLFJlcXVpcmVkIHBhcmFtZXRlciBpcyBtaXNzaW5nOiByZXNwb25zZV90eXBlGjdodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9pZGVudGl0eS9wcm90b2NvbHMvb2F1dGgyIJAD&client_id=603162325798-hb44n9gjugoc6aoinmb0964ovrqi8uqe.apps.googleusercontent.com">
        {" "}
        요청
      </a>
      {/* <GoogleLoginButton onClick={()=>nav("https://accounts.google.com/signin/oauth/error?authError=Cg9pbnZhbGlkX3JlcXVlc3QSLFJlcXVpcmVkIHBhcmFtZXRlciBpcyBtaXNzaW5nOiByZXNwb25zZV90eXBlGjdodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9pZGVudGl0eS9wcm90b2NvbHMvb2F1dGgyIJAD&client_id=603162325798-hb44n9gjugoc6aoinmb0964ovrqi8uqe.apps.googleusercontent.com"} /> */}
    </>
  );
};
export default LoginSignupWrap;
