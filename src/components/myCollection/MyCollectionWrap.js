import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CollectionList from "../../common/CollectionList";
import Button from "../../elements/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteList,
  getMyCollection,
} from "../../redux/modules/collectionSlice";
import icon_add from "../../svg/icon_add.svg";

const MyCollectionWrap = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [count, setCount] = useState(0);
  // const data = useSelector(
  //   (state) => state.myCollectionSlice.myCollection.data
  // );
  //!데이터 push했을때
  const data = useSelector(
    (state) => state.myCollectionSlice.myCollection.dataList
  );

  useEffect(() => {
    if (count === 0) {
      dispatch(deleteList());
    }
    dispatch(getMyCollection(count));
  }, [count]);

  return (
    <ContentsWrap>
      <TitleWrap>
        {" "}
        <Title>내 튜닝</Title>
        {/* //todo 버튼은 로그인 아이디가 일치할때만 보이도록 */}
        <Icon
          src={icon_add}
          onClick={() => {
            nav("/mypage/add");
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
