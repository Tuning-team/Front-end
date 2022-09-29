import React from "react";
import CategoryWrap from "../components/features/category/CategoryWrap";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";
import StickyButtons from "../components/common/StickyButtons";
import Headers from "../components/common/Headers";
const CategoryPage = () => {
  return (
    <Layout>
      <Headers />
      <CategoryWrap />
      <StickyButtons />
      <Navbar />
    </Layout>
  );
};
export default CategoryPage;
