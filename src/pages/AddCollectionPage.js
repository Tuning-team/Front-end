import React from "react";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";
import AddCollectionForm from "../components/features/myCollection/form/AddCollectionForm";

const AddCollectionPage = () => {
  return (
    <Layout>
      <AddCollectionForm btn="추가하기" />;
      <Navbar />
    </Layout>
  );
};
export default AddCollectionPage;
