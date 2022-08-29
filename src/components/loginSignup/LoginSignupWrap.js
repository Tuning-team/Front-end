import React from "react";
import { Input } from "../../elements/Input";
import { GoogleLoginButton } from "react-social-login-buttons";
import GoogleLogin from "react-google-login";
import axios from "axios";

const LoginSignupWrap = () => {
  const clientId = "OAuth Web Client ID";
  //!구글로그인 함수
  const onSuccess = async (response) => {
    console.log(response);
    const {
      googleId,
      profileObj: { email, name },
    } = response;
    // await onSocial({
    //   socialId: googleId,
    //   socialType: "google",
    //   email,
    //   nickname: name,
    // });
    console.log(response);
  };
  //에러처리
  const onFailure = (error) => {
    console.log(error);
  };

  const onLogoutSuccess = () => {
    console.log("success log out");
  };
  const onClickHandler = () => {
    axios.get("");
  };
  return (
    <>
      <GoogleLoginButton onClick={onClickHandler} />
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </>
  );
};
export default LoginSignupWrap;
