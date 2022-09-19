import React from "react";
import Layout from "../components/common/Layout";
import Headers from "../components/common/Headers";
import MainListWrap from "../components/features/mainList/MainListWrap";
import Navbar from "../components/common/Navbar";

const MainPage = () => {
  return (
    <Layout>
      <Headers />
      <MainListWrap />
      <Navbar />
    </Layout>
  );
};
export default MainPage;
