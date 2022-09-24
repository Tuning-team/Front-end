import React from "react";
import Layout from "../components/common/Layout";
import Headers from "../components/common/Headers";
import MainListWrap from "../components/features/mainList/MainListWrap";
import Navbar from "../components/common/Navbar";
import StickyButtons from "../components/common/StickyButtons";

const MainPage = () => {
  return (
    <Layout>
      <Headers />
      <MainListWrap />
      <StickyButtons />
      <Navbar />
    </Layout>
  );
};
export default MainPage;
