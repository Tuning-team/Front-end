import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVideoList } from "../../../redux/modules/collectionSlice";
import Loading from "../../common/Loading";
import { getVideo } from "../../../redux/modules/collectionSlice";

const ResultVideo = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.myCollectionSlice.searchResult.data
  );
  const loading = useSelector(
    (state) => state.myCollectionSlice.searchResult.loading
  );
  const token = useSelector(
    (state) => state.myCollectionSlice.searchResult.nextPageToken
  );
  const key = useSelector((state) => state.myCollectionSlice.searchResult.key);

  const seeMore = () => {
    const keyword = localStorage.getItem("keyword");
    dispatch(getVideo({ keyword, token, key }));
  };

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
                const video_id = [x.video];
                console.log(video_id);
                dispatch(addVideoList(video_id));
                nav(-1);
              }}
            >
              {x.video?.title}
            </ResultBox>
          );
        })
      )}
      {/* //todo 더보기 버튼 다음페이지가 없을때 안보이게 //todo 기존데이터 쌓이게?
      사라지게? 정하기 */}
      {data.length === 0 ? "" : <div onClick={seeMore}>더보기</div>}
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
