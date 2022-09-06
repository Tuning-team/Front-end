import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CollectionList from "../common/CollectionList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryCollection } from "../redux/modules/collectionSlice";

const CategoryPage = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state.myCollectionSlice.categoryCollection.data
  );
  useEffect(() => {
    dispatch(getCategoryCollection(param.collection_id));
  }, []);
  return (
    <>
      <TitleWrap>ooo과 관련된 컬렉션</TitleWrap>
      <CollectionList state={data} />
    </>
  );
};
export default CategoryPage;
const TitleWrap = styled.div``;
