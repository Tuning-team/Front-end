import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addVideoList } from "../../redux/modules/collectionSlice";
import Loading from "../../common/Loading";
const ResultVideo = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  //검색결과가 있을때, 없을때. 모달
  const [add, setAdd] = useState(null);
  const data = useSelector(
    (state) => state.myCollectionSlice.searchResult.data
  );

  const loading = useSelector(
    (state) => state.myCollectionSlice.searchResult.loading
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : data.length === 0 ? (
        <AlertBox>결과가 없습니다.</AlertBox>
      ) : (
        data?.map((x, idx) => {
          return (
            <ResultBox
              key={idx}
              onClick={() => {
                dispatch(addVideoList(x));
                nav(-1);
              }}
            >
              {x.title}
            </ResultBox>
          );
        })
      )}
    </>
  );
};
export default ResultVideo;

const ResultBox = styled.div`
  margin: 10px;
  border: 1px solid;
  padding: 5px;

  &:hover {
    background-color: grey;
  }
`;
const AlertBox = styled.div`
  display: flex;
  color: transparent;
  background: linear-gradient(90deg, #b295e9 0%, #8179f2 100%);
  -webkit-background-clip: text;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 10px;
`;
