import React from "react";
import LoginSignupWrap from "../components/features/loginSignup/LoginSignupWrap";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";

const LoginSignupPage = () => {
  return (
    <Layout>
      <LoginSignupWrap />
      <Navbar />
    </Layout>
  );
};
export default LoginSignupPage;
