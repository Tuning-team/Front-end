import React from "react";
import Layout from "../components/common/Layout";
import Navbar from "../components/common/Navbar";
import MyCollectionWrap from "../components/features/myCollection/MyCollectionWrap";
import StickyButtons from "../components/common/StickyButtons";
const MyCollectionPage = () => {
  return (
    <Layout>
      <MyCollectionWrap />
      <StickyButtons />
      <Navbar />
    </Layout>
  );
};
export default MyCollectionPage;
