import React from "react";
import Navbar from "../common/Navbar";
import CollectionWrap from "../components/collection/CollectionWrap";
import styled from "styled-components";

const CollectionPage = () => {
  return (
    <Layout>
      <CollectionWrap />
      <Navbar />
    </Layout>
  );
};
export default CollectionPage;
const Layout = styled.div`
  padding-bottom: 4.5rem;
`;
