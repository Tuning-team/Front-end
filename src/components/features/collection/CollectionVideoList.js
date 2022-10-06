import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoList,
  resetVideoList,
  selectedVideoId,
} from "../../../redux/modules/tempCollectionSlice";
import throttle from "lodash/throttle";
import { editVideoList } from "../../../redux/modules/collectionSlice";

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
    <>
      {videoList?.map((elem) => {
        return (
          <VideoContainer
            key={elem._id}
            onClick={() => onPlayVideo(elem.videoId)}
          >
            <div>
              {/* <Wrapper> */}
              <Img src={elem.thumbnails} alt={elem._id} />
              {/* </Wrapper> */}
              <TextWrapper>
                <h3>{elem.videoTitle}</h3>
                <h6>{elem.channelTitle}</h6>
              </TextWrapper>
            </div>
          </VideoContainer>
        );
      })}
    </>
  );
};

export default CollectionVideoList;

const VideoContainer = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.5rem 0;
  & > div {
    display: flex;
    margin: 0 1.25rem;
  }
`;

const Wrapper = styled.div`
  /* flex: none; */
  width: 9.063rem;
  height: auto;
`;
const Img = styled.img`
  width: 9.063rem;
  height: 5.125rem;
  /* border-radius: 4px; */
`;

const TextWrapper = styled.div`
  padding-left: 0.75rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h3 {
    margin: 0;

    font-size: 0.875rem;
    font-weight: bold;
    letter-spacing: -0.7px;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    max-height: 3.72;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  & h6 {
    margin: 0;
    font-size: 0.725rem;
    font-weight: normal;
    letter-spacing: -0.25px;
    color: #adadad;
  }
`;
