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
    <Wrap>
      <TitleWrap>{title[0]?.categoryName} 관련된 컬렉션</TitleWrap>
      <CollectionList state={data} />
    </Wrap>
  );
};
export default CategoryWrap;
const Wrap = styled.div`
  margin-left: 1rem;
`;
const TitleWrap = styled.div`
  padding: 1.3rem 1.3rem 1.3rem 0rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 123.8%;
`;
