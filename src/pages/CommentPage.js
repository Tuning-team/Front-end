import React from "react";
import Headers from "../common/Headers";
import CommentForm from "../components/comment/CommentForm";
import Navbar from "../common/Navbar";

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
