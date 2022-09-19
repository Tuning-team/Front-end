import React from "react";
import CategoryWrap from "../components/features/category/CategoryWrap";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";

const CategoryPage = () => {
  return (
    <Layout>
      <CategoryWrap />
      <Navbar />
    </Layout>
  );
};
export default CategoryPage;
