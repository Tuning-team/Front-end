import React from "react";
import Layout from "../components/common/Layout";
import Navbar from "../components/common/Navbar";
import MyCollectionWrap from "../components/features/myCollection/MyCollectionWrap";

const MyCollectionPage = () => {
  return (
    <Layout>
      <MyCollectionWrap />
      <Navbar />
    </Layout>
  );
};
export default MyCollectionPage;
