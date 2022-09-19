import React from "react";
import SearchVideo from "../components/features/addCollection/SearchVideo";
import ResultVideo from "../components/features/addCollection/ResultVideo";
import Navbar from "../components/common/Navbar";

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
