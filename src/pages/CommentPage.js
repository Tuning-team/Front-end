import React from "react";
import Headers from "../components/common/Headers";
import CommentForm from "../components/features/comment/CommentForm";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";

const CommentPage = () => {
  return (
    <Layout>
      <Headers />
      <CommentForm />
      <Navbar />
    </Layout>
  );
};
export default CommentPage;
