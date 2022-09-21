import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CollectionList from "../../common/CollectionList";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAll,
  getMyCollection,
} from "../../../redux/modules/collectionSlice";
import icon_add from "../../../shared/svg/icon_add.svg";

const MyCollectionWrap = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const data = useSelector(
    (state) => state.myCollectionSlice.myCollection.dataList
  );
  useEffect(() => {
    if (count === 0) {
      dispatch(deleteAll());
    }
    dispatch(getMyCollection(count));
  }, [count]);

  return (
    <ContentsWrap>
      <TitleWrap>
        {" "}
        <Title>내 튜닝</Title>
        <Icon
          src={icon_add}
          onClick={() => {
            nav("/myCollection/add");
          }}
        />
      </TitleWrap>
      <CollectionList state={data} setCount={setCount} />
    </ContentsWrap>
  );
};
export default MyCollectionWrap;

const ContentsWrap = styled.div`
  margin-left: 1rem;
  padding-bottom: 5rem;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.3rem 1.3rem 1.3rem 0rem;
`;
const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 123.8%;
`;
const Icon = styled.img`
  width: 1.563rem;
  height: 1.563rem;
`;
