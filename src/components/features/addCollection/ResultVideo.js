import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVideoList } from "../../../redux/modules/collectionSlice";
import Loading from "../../common/Loading";

const ResultVideo = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.myCollectionSlice.searchResult.data
  );
  const loading = useSelector(
    (state) => state.myCollectionSlice.searchResult.loading
  );
  // const resultList = data.video;
  console.log(data);
  return (
    <ResultWrap>
      {loading ? (
        <Loading />
      ) : data.length === 0 ? (
        <AlertBox>검색 결과가 없습니다.</AlertBox>
      ) : (
        data?.map((x, idx) => {
          return (
            <ResultBox
              key={idx}
              onClick={() => {
                dispatch(addVideoList(x.video));
                nav(-1);
              }}
            >
              {x.video?.title}
            </ResultBox>
          );
        })
      )}
    </ResultWrap>
  );
};
export default ResultVideo;
const ResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;

const ResultBox = styled.div`
  margin: 5px 0px 5px 0px;
  border-bottom: 1px solid #efefef;
  border-left: 2px solid #b295e9;
  padding: 5px;
  width: 22rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:active {
    background-color: #efefef;
  }
`;
const AlertBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 10px;
`;
