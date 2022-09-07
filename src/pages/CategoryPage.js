import React from "react";
import styled from "styled-components";
import Navbar from "../common/Navbar";
import CategoryWrap from "../components/category/CategoryWrap";
import Headers from "../common/Headers";

const CategoryPage = () => {
  return (
    <>
      <Headers />
      <CategoryWrap />
      <Navbar />
    </>
  );
};
export default CategoryPage;
