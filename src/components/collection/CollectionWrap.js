import React from "react";
import CollectionInformation from "./CollectionInformation";
import CollectionVideoList from "./CollectionVideoList";

const CollectionWrap = () => {
  return (
    <>
      <CollectionInformation />
      <CollectionVideoList />
      {/* <CollectionComment /> */}
    </>
  );
};
export default CollectionWrap;
