import React from "react";
import CategoryWrap from "../components/features/category/CategoryWrap";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";
import StickyButtons from "../components/common/StickyButtons";
const CategoryPage = () => {
  return (
    <Layout>
      <CategoryWrap />
      <StickyButtons />
      <Navbar />
    </Layout>
  );
};
export default CategoryPage;
