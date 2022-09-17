import React from "react";
import SearchVideo from "../components/addCollection/SearchVideo";
import ResultVideo from "../components/addCollection/ResultVideo";
import Navbar from "../common/Navbar";

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
