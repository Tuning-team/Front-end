import React from "react";
import CollectionInformation from "./CollectionInformation";
import CollectionVideoList from "./CollectionVideoList";
import { useParams } from "react-router-dom";

const CollectionWrap = () => {
  const param = useParams();
  console.log(param);
  // ! param에는 collection_id가 담겨있고 이 친구는 다른 곳에서 넘어와야 되는 애..
  return (
    <>
      <CollectionInformation collectionId={param.collection_id} />
      <CollectionVideoList />
      {/* <CollectionComment /> */}
    </>
  );
};
export default CollectionWrap;
