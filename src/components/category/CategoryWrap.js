import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCollection } from "../../redux/modules/collectionSlice";
import CollectionList from "../../common/CollectionList";
import icon_backspace_black from "../../svg/icon_backspace_black.svg";

const CategoryWrap = () => {
  const param = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state.myCollectionSlice.categoryCollection.data
  );
  const categories = useSelector(
    (state) => state.myCollectionSlice.category.data
  );
  useEffect(() => {
    dispatch(getCategoryCollection(param.collection_id));
  }, [param.collection_id]);
  const title = categories.filter((x) => x._id === param.collection_id);

  return (
    <Wrap>
      <TitleWrap>
        <img
          src={icon_backspace_black}
          alt="icon_backspace_black"
          onClick={() => nav(-1)}
        />
        {title[0]?.categoryName || "오늘의"} 튜닝
      </TitleWrap>
      <CollectionList state={data} />
    </Wrap>
  );
};
export default CategoryWrap;
const Wrap = styled.div`
  margin-left: 1rem;
  padding-bottom: 5.5rem;

  & img {
    margin-right: 0.6rem;
  }
`;
const TitleWrap = styled.div`
  padding: 1.3rem 1.3rem 1.3rem 0rem;
  font-style: normal;
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 123.8%;
`;
