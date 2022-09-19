import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoList,
  resetVideoList,
  selectedVideoId,
} from "../../../redux/modules/tempCollectionSlice";
import throttle from "lodash/throttle";

const CollectionVideoList = ({ collectionId }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const videoList = useSelector((state) => state.collectionSlice.videos);
  const pageInfo = useSelector((state) => state.collectionSlice.pageInfo);

  useEffect(() => {
    if (count >= pageInfo?.totalVideosView) {
      return;
    } else {
      dispatch(getVideoList({ collectionId, count }));
    }
    if (count === 0) {
      dispatch(resetVideoList());
    }
  }, [count]);

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      setCount(0);
    };
  }, []);

  const useHandleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 31) {
      if (scrollTop !== 0) {
        setCount((prev) => prev + 5);
      }
    }
  };
  const infiniteScroll = throttle(useHandleScroll, 1000);

  const onPlayVideo = (videoId) => {
    dispatch(selectedVideoId(videoId));
  };
  return (
    <VideoListArea>
      {videoList?.map((elem) => {
        return (
          <VideoContainer
            key={elem._id}
            onClick={() => onPlayVideo(elem.videoId)}
          >
            <Wrapper>
              <Img src={elem.thumbnails} alt={elem._id} />
            </Wrapper>
            <TextWrapper>
              <h3>{elem.videoTitle}</h3>
              <h6>{elem.channelTitle}</h6>
            </TextWrapper>
          </VideoContainer>
        );
      })}
    </VideoListArea>
  );
};

export default CollectionVideoList;
const VideoListArea = styled.section`
  background-color: #f8f8f8;
  padding: 1.4rem 1rem;
`;
const VideoContainer = styled.div`
  display: flex;
  margin-bottom: 0.346rem;
`;
const Wrapper = styled.div`
  flex: none;
  width: 10.75rem;
  height: auto;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const TextWrapper = styled.div`
  padding-left: 0.938rem;

  & h3 {
    margin-bottom: 0.25rem;

    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.3;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    max-height: 3.72;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  & h6 {
    font-size: 0.75rem;
    font-weight: normal;
    line-height: 1.24;
  }
`;
