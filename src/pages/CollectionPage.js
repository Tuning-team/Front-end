import React from "react";
import CollectionWrap from "../components/features/collection/CollectionWrap";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";
import StickyButtons from "../components/common/StickyButtons";
const CollectionPage = () => {
  return (
    <Layout>
      <CollectionWrap />
      <StickyButtons />
      <Navbar />
    </Layout>
  );
};
export default CollectionPage;
