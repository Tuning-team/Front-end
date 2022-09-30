import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAll,
  getMyCollection,
} from "../../../redux/modules/collectionSlice";
import MyCollections from "../myCollection/MyCollections";

const MyCollection = () => {
  const dispatch = useDispatch();
  const { dataList, hasNext, totalContents } = useSelector(
    (state) => state.myCollectionSlice.myCollection
  );

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 0) {
      dispatch(deleteAll());
    }
    if (totalContents > count) {
      dispatch(getMyCollection(count));
    }
  }, [count]);
  return (
    <MyCollections
      state={dataList}
      totalContents={totalContents}
      hasNext={hasNext}
      setCount={setCount}
      title="My Tuning"
    />
  );
};
export default MyCollection;
