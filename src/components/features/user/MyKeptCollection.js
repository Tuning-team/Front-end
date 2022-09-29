import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAll,
  getKeptCollection,
} from "../../../redux/modules/collectionSlice";
import MyCollections from "../myCollection/MyCollections";

const MyKeptCollection = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const { data, hasNext, totalContents } = useSelector(
    (state) => state.myCollectionSlice.keptCollection
  );

  useEffect(() => {
    if (count === 0) {
      dispatch(deleteAll());
    }
    if (totalContents > count) {
      dispatch(getKeptCollection(count));
    }
  }, [count]);

  return (
    <MyCollections
      state={data}
      totalContents={totalContents}
      setCount={setCount}
      hasNext={hasNext}
      title="Kept Tuning"
    />
  );
};
export default MyKeptCollection;
