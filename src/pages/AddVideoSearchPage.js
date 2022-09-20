import React, { useState } from "react";
import SearchVideo from "../components/features/addCollection/SearchVideo";
import ResultVideo from "../components/features/addCollection/ResultVideo";
import Navbar from "../components/common/Navbar";
import SeeMore from "../components/features/addCollection/SeeMore";

const AddVideoSearchPage = () => {
  const seeMore = useState(false);

  return (
    <>
      <SearchVideo />
      <ResultVideo />
      {/* <SeeMore onClick={()=>} /> */}
      <Navbar />
    </>
  );
};
export default AddVideoSearchPage;
