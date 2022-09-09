import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CollectionInformation from "./CollectionInformation";
import CollectionVideoList from "./CollectionVideoList";

import styled from "styled-components";
import CommentList from "../comment/CommentList";
import CommentForm from "../comment/CommentForm";

const CollectionWrap = () => {
  const param = useParams();
  const nav = useNavigate();

  return (
    <Layout>
      <button onClick={() => nav(-1)}>뒤로가기</button>
      <CollectionInformation collectionId={param.collection_id} />
      <CollectionVideoList collectionId={param.collection_id} />

      {/* Comment Component 작업 중 */}
      <CommentForm collectionId={param.collection_id} />
      {/* <CommentList collectionId={param.collection_id} /> */}
    </Layout>
  );
};
export default CollectionWrap;
const Layout = styled.div`
  overflow-x: hidden;
  margin: 0.6rem;
`;
