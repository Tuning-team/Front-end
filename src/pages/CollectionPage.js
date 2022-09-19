import React from "react";
import CollectionWrap from "../components/features/collection/CollectionWrap";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";

const CollectionPage = () => {
  return (
    <Layout>
      <CollectionWrap />
      <Navbar />
    </Layout>
  );
};
export default CollectionPage;
