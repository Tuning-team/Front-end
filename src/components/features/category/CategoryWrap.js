import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  getCategoryCollection,
} from "../../../redux/modules/categorySlice";
import MyCollections from "../myCollection/MyCollections";

const CategoryWrap = () => {
  const param = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const id = param.collection_id;
  const [count, setCount] = useState(0);

  //!카테고리에 맞는 컬렉션리스트
  const { data, hasNext, totalContents } = useSelector(
    (state) => state.categorySlice.categoryCollection
  );
  //!카테고리가 바뀔때마다
  useEffect(() => {
    setCount(0);
  }, [location]);

  useEffect(() => {
    if (count === 0) {
      dispatch(deleteCategory());
    }
    if (totalContents > count) {
      dispatch(getCategoryCollection({ id, count }));
    }
  }, [count, location]);

  return (
    <MyCollections
      title={data[0]?.category_title || "오늘의"}
      state={data}
      hasNext={hasNext}
      totalContents={totalContents}
      setCount={setCount}
    />
  );
};

export default CategoryWrap;
