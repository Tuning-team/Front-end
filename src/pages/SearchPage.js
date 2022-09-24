import React from "react";
import SearchWrap from "../components/features/search/SearchWrap";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";
import StickyButtons from "../components/common/StickyButtons";

const SearchPage = () => {
  return (
    <Layout>
      <SearchWrap />
      <StickyButtons />
      <Navbar />
    </Layout>
  );
};
export default SearchPage;
