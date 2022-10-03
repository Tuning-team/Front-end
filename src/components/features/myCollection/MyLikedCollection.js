import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAll,
  getLikedCollection,
} from "../../../redux/modules/collectionSlice";
import MyCollections from "../myCollection/MyCollections";

const MyLikedCollection = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const { data, hasNext, totalContents } = useSelector(
    (state) => state.myCollectionSlice.likedCollection
  );

  useEffect(() => {
    if (count === 0) {
      dispatch(deleteAll());
    }
    if (totalContents > count) {
      dispatch(getLikedCollection(count));
    }
  }, [count]);
  return (
    <MyCollections
      state={data}
      hasNext={hasNext}
      totalContents={totalContents}
      setCount={setCount}
      title="Liked Tuning"
    />
  );
};
export default MyLikedCollection;
