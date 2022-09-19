import React from "react";
import AddCollectionWrap from "../components/features/addCollection/AddCollectionWrap";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";

const AddCollectionPage = () => {
  return (
    <Layout>
      <AddCollectionWrap />
      <Navbar />
    </Layout>
  );
};
export default AddCollectionPage;
