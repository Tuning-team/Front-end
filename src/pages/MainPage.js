import React from "react";
import Layout from "../components/common/Layout";
import Headers from "../components/common/Headers";
import MainListWrap from "../components/features/mainList/MainListWrap";
import Navbar from "../components/common/Navbar";
import StickyButtons from "../components/common/StickyButtons";
import { getCookie } from "../shared/cookie";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const nav = useNavigate();

  return (
    <Layout>
      <Headers>
        <div onClick={() => nav("/login")}>
          {!getCookie("token") ? "로그인" : "로그아웃"}
        </div>
      </Headers>
      <MainListWrap />
      <StickyButtons />
      <Navbar />
    </Layout>
  );
};
export default MainPage;
