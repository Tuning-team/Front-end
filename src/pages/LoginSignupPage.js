import React from "react";
import Headers from "../common/Headers";
import LoginSignupWrap from "../components/loginSignup/LoginSignupWrap";
import Navbar from "../common/Navbar";

const LoginSignupPage = () => {
  return (
    <>
      {/* //todo 로그인버튼 안보이게 하기 */}
      <Headers />
      <LoginSignupWrap />
      <Navbar />
    </>
  );
};
export default LoginSignupPage;
