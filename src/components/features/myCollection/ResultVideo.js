import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVideoList } from "../../../redux/modules/collectionSlice";
import Loading from "../../common/Loading";
import { getVideo } from "../../../redux/modules/collectionSlice";
import icon_bottom from "../../../shared/icon/icon_bottom.svg";

const ResultVideo = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, nextPageToken, key } = useSelector(
    (state) => state.myCollectionSlice.searchResult
  );

  const seeMore = () => {
    const keyword = localStorage.getItem("keyword");
    dispatch(getVideo({ keyword, nextPageToken, key }));
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
              <Thumbnail>
                <img src={x.video?.thumbnail_src} alt={x.video?.title} />
              </Thumbnail>
              <VideoInfo>
                <span>{x.uploader?.username}</span> |{" "}
                <VideoTitle>{x.video?.title}</VideoTitle>
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
const AlertBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 10px;
`;
const ResultBox = styled.div`
  display: flex;
  padding: 0.65rem 1.25rem;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  width: 100%;
  &:active {
    background-color: #efefef;
  }
`;
const Thumbnail = styled.div`
  min-width: 8.8rem;
  max-height: 5rem;
  overflow: hidden;

  &:active {
    opacity: 0.5;
  }
  & img {
    width: 8.781rem;
    height: auto;
    object-fit: cover;
  }
`;
const VideoInfo = styled.p`
  padding-left: 0.2rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & span {
    font-weight: bold;
  }
`;
const VideoTitle = styled.span`
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1.25;
  letter-spacing: -0.3px;
  text-align: left;
  color: #adadad;
`;
const More = styled.div`
  margin-top: 1rem;
  color: #adadad;
  display: flex;
  justify-content: center;
`;
