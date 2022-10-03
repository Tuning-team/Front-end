import React from "react";
import LoginSignupWrap from "../components/features/loginSignup/LoginSignupWrap";
import Layout from "../components/common/Layout";
import Headers from "../components/common/Headers";
//!마이페이지 안으로
const LoginSignupPage = () => {
  return (
    <Layout>
      <Headers />
      <LoginSignupWrap />
    </Layout>
  );
};
export default LoginSignupPage;
