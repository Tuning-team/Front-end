import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCollection } from "../../redux/modules/tempCollectionSlice";
import CollectionInformation from "./CollectionInformation";
import CollectionVideoList from "./CollectionVideoList";

const CollectionWrap = () => {
  const param = useParams();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.collectionSlice.data);

  useEffect(() => {
    dispatch(getCollection(param.collection_id));
  }, []);

  return (
    <>
      <CollectionInformation data={data} collectionId={param.collection_id} />
      <CollectionVideoList collectionId={param.collection_id} />
      {/* <CollectionComment /> */}
    </>
  );
};
export default CollectionWrap;
