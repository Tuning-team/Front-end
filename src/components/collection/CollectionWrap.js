import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import CollectionInformation from "./CollectionInformation";
import CollectionVideoList from "./CollectionVideoList";

import styled from "styled-components";

const CollectionWrap = () => {
  const param = useParams();
  return (
    <Layout>
      <CollectionInformation collectionId={param.collection_id} />
      <CollectionVideoList collectionId={param.collection_id} />
      {/* <CollectionComment /> */}
    </Layout>
  );
};
export default CollectionWrap;
const Layout = styled.div`
  overflow-x: hidden;
  margin: 0.6rem;
`;
