import React from "react";
import SearchWrap from "../components/features/search/SearchWrap";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";

const SearchPage = () => {
  return (
    <Layout>
      <SearchWrap />
      <Navbar />
    </Layout>
  );
};
export default SearchPage;
