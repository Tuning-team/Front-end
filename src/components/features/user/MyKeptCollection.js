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

const MyKeptCollection = () => {
  const [tab, setTab] = useState(1);
  const dispatch = useDispatch();
  const keptCollection = useSelector(
    (state) => state.myCollectionSlice.keptCollection
  );
  const [count3, setCount3] = useState(0);
  useEffect(() => {
    if (count3 === 0) {
      dispatch(deleteAll());
    }
    if (keptCollection.totalContents > count3) {
      dispatch(getKeptCollection(count3));
    }
  }, [count3]);

  return (
    <MyCollections
      state={keptCollection.data}
      totalContents={keptCollection.totalContents}
      setCount={setCount3}
      title="Kept Tuning"
    />
  );
};
export default MyKeptCollection;
