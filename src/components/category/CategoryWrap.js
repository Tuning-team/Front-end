import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CollectionList from "../../common/CollectionList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryCollection } from "../../redux/modules/collectionSlice";

const CategoryWrap = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state.myCollectionSlice.categoryCollection.data
  );

  const categories = useSelector(
    (state) => state.myCollectionSlice.category.data
  );
  const title = categories.filter((x) => x._id === param.collection_id);

  useEffect(() => {
    dispatch(getCategoryCollection(param.collection_id));
  }, [param.collection_id]);

  return (
    <>
      <TitleWrap>{title[0]?.categoryName} 관련된 컬렉션</TitleWrap>
      <CollectionList state={data} />
    </>
  );
};
export default CategoryWrap;
const TitleWrap = styled.div``;
