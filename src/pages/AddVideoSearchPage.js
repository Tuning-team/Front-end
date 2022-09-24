import React, { useState } from "react";
import SearchVideo from "../components/features/addCollection/SearchVideo";
import ResultVideo from "../components/features/addCollection/ResultVideo";
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
