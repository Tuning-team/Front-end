import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVideoList } from "../../../redux/modules/collectionSlice";
import Loading from "../../common/Loading";
import { getVideo } from "../../../redux/modules/collectionSlice";
import icon_bottom from "../../../shared/svg/icon_bottom.svg";

const ResultVideo = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.myCollectionSlice.searchResult.data
  );
  console.log(data);
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
                dispatch(addVideoList(video_id));
                nav(-1);
              }}
            >
              <Thumbnail src={x.video?.thumbnail_src} />
              <VideoInfo>
                {x.uploader?.username} <VideoTitle>{x.video?.title}</VideoTitle>
              </VideoInfo>
            </ResultBox>
          );
        })
      )}
      {data.length === 0 || loading ? (
        ""
      ) : (
        <More onClick={seeMore}>
          <img src={icon_bottom} alt="icon" />
          <p>더보기</p>
        </More>
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
  display: flex;
  margin: 5px 0px 5px 0px;
  border-bottom: 1px solid #efefef;
  padding: 5px;
  width: 20.938rem;
  height: 5rem;

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
const Thumbnail = styled.img`
  width: 8.781rem;
  height: 5rem;
  &:active {
    opacity: 0.5;
  }
`;

const VideoInfo = styled.p`
  font-style: bold;
  padding: 3px;
  width: 15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const VideoTitle = styled.span`
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.3px;
  text-align: left;
  color: #adadad;
`;
const More = styled.div`
  color: #adadad;
  display: flex;
  width: 20rem;
  justify-content: center;
`;
