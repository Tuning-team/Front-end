import React from "react";
import SearchVideo from "../components/features/myCollection/SearchVideo";
import ResultVideo from "../components/features/myCollection/ResultVideo";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";
const AddVideoSearchPage = () => {
  return (
    <Layout>
      <SearchVideo />
      <ResultVideo />
      <Navbar />
    </Layout>
  );
};
export default AddVideoSearchPage;
