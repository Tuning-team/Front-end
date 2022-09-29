import React, { Children, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCollection } from "../../../redux/modules/categorySlice";
import MyCollections from "../myCollection/MyCollections";

import NoData from "../../common/NoData";
import Headers from "../../common/Headers";

const CategoryWrap = ({ Children }) => {
  const param = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state.categorySlice.categoryCollection.data
  );
  const categories = useSelector((state) => state.categorySlice.category.data);
  useEffect(() => {
    dispatch(getCategoryCollection(param.collection_id));
  }, [param.collection_id]);
  const title = categories.filter((x) => x._id === param.collection_id);

  return (
    <Wrap>
      <Headers />
      <MyCollections title={title[0]?.categoryName || "오늘의"} state={data} />
      {/* {data?.length === 0 && <NoData />} */}
    </Wrap>
  );
};

export default CategoryWrap;
const Wrap = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
`;
