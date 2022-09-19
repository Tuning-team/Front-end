import React from "react";
import Headers from "../components/common/Headers";
import CommentForm from "../components/features/comment/CommentForm";
import Navbar from "../components/common/Navbar";

const CommentPage = () => {
  return (
    <>
      <Headers />
      <CommentForm />
      <Navbar />
    </>
  );
};
export default CommentPage;
