import React from "react";

import Headers from "../common/Headers";
import SearchWrap from "../components/search/SearchWrap";
import Navbar from "../common/Navbar";
import SearchVideo from "../components/addCollection/SearchVideo";
import ResultVideo from "../components/addCollection/ResultVideo";

const AddVideoSearchPage = () => {
  return (
    <>
      <SearchVideo />
      <ResultVideo />
      <Navbar />
    </>
  );
};
export default AddVideoSearchPage;
