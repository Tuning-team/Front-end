import React from "react";
import LoginSignupWrap from "../components/features/user/LoginSignupWrap";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";
//!마이페이지 안으로
const LoginSignupPage = () => {
  return (
    <Layout>
      <LoginSignupWrap />
      <Navbar />
    </Layout>
  );
};
export default LoginSignupPage;
