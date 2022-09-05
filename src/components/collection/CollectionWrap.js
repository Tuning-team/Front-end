import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCollection } from "../../redux/modules/tempCollectionSlice";
import CollectionInformation from "./CollectionInformation";
import CollectionVideoList from "./CollectionVideoList";

const CollectionWrap = () => {
  // ! param에는 collection_id가 담겨있고 이 친구는 다른 곳에서 넘어와야 되는 애..
  const param = useParams();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.collectionSlice.data);

  useEffect(() => {
    dispatch(getCollection(param.collection_id));
  }, []);

  return (
    <>
      <CollectionInformation data={data} />
      <CollectionVideoList collectionId={param.collection_id} />
      {/* <CollectionComment /> */}
    </>
  );
};
export default CollectionWrap;
