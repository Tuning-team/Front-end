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

const MyCollection = () => {
  const dispatch = useDispatch();
  const myCollection = useSelector(
    (state) => state.myCollectionSlice.myCollection
  );
  const myCollectionLoading = useSelector(
    (state) => state.myCollectionSlice.myCollection.loading
  );
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    if (count1 === 0) {
      dispatch(deleteAll());
    }
    if (myCollection.totalContents > count1) {
      dispatch(getMyCollection(count1));
    }
  }, []);
  return (
    <MyCollections
      state={myCollection.data}
      totalContents={myCollection.totalContents}
      hasNext={myCollection.hasNext}
      setCount={setCount1}
      title="My Tuning"
    />
  );
};
export default MyCollection;
