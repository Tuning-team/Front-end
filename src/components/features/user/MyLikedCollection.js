import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAll,
  getMyCollection,
  getLikedCollection,
  getKeptCollection,
} from "../../../redux/modules/collectionSlice";
import MyCollections from "../myCollection/MyCollections";

const MyLikedCollection = () => {
  const dispatch = useDispatch();
  const likedCollection = useSelector(
    (state) => state.myCollectionSlice.likedCollection
  );
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    if (count2 === 0) {
      dispatch(deleteAll());
    }
    if (likedCollection.totalContents > count2) {
      dispatch(getLikedCollection(count2));
    }
  }, [count2]);
  return (
    <MyCollections
      hasNext={likedCollection.hasNext}
      totalContents={likedCollection.totalContents}
      state={likedCollection.data}
      setCount={setCount2}
      title="Liked Tuning"
    />
  );
};
export default MyLikedCollection;
