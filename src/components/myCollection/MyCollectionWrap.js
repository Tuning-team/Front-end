import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CollectionList from "../../common/CollectionList";
import Button from "../../elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { getMyCollection } from "../../redux/modules/collectionSlice";

const MyCollectionWrap = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [count, setCount] = useState(0);
  const data = useSelector(
    (state) => state.myCollectionSlice.myCollection.data
  );
  //!데이터 push했을때
  const 테스트 = useSelector(
    (state) => state.myCollectionSlice.myCollection.dataList
  );

  useEffect(() => {
    dispatch(getMyCollection(count));
  }, [count]);

  return (
    <div>
      <TitleWrap>
        {" "}
        <Title>내 컬랙션</Title>
        {/* //todo 버튼은 로그인 아이디가 일치할때만 보이도록 */}
        <Button
          onClick={() => {
            nav("/mypage/add");
          }}
        >
          추가하기
        </Button>
      </TitleWrap>
      <CollectionList state={테스트} setCount={setCount} />
    </div>
  );
};
export default MyCollectionWrap;

const TitleWrap = styled.div`
  background-color: pink;
`;
const Title = styled.h1``;
