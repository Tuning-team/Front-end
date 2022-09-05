import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ResultVideo = () => {
  const nav = useNavigate();
  //검색결과가 있을때, 없을때. 모달
  const [add, setAdd] = useState(null);
  const data = useSelector(
    (state) => state.myCollectionSlice.searchResult.data
  );

  return (
    <>
      {data.length === 0 ? (
        <div>결과가 없습니다.</div>
      ) : (
        data?.map((x, idx) => {
          return (
            <ResultBox
              onClick={() => {
                setAdd(x.videoId);
                // nav("-1", {
                //   state: x.videoId,
                // });
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
  border: 3px solid;

  &:hover {
    background-color: grey;
  }
`;
