import React from "react";
import LoginSignupWrap from "../components/features/user/LoginSignupWrap";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";
import HeaderLogo from "../components/features/myCollection/HeaderLogo";
//!마이페이지 안으로
const LoginSignupPage = () => {
  return (
    <Layout>
      <HeaderLogo />
      <LoginSignupWrap />
    </Layout>
  );
};
export default LoginSignupPage;
