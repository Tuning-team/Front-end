import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoList,
  resetVideoList,
} from "../../redux/modules/tempCollectionSlice";
import YoutubePlayer from "./YoutubePlayer";
import throttle from "lodash/throttle";

const CollectionVideoList = ({ collectionId }) => {
  const dispatch = useDispatch();
  const videoList = useSelector((state) => state.collectionSlice.videos);
  const pageInfo = useSelector((state) => state.collectionSlice.pageInfo);
  console.log(videoList, pageInfo); // 이안에 hasNext랑 totalVideosView가 있음

  // ! 클릭하면 유튜브 동영상을 재생할 수 있는 모달 발생
  const [videoId, setVideoId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onPlayVideo = (videoId) => {
    setVideoId(videoId);
    setShowModal(true);
  };
  // --------------------여기까지 기본 로직-----------------------
  const [count, setCount] = useState(0);

  const useHandleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    // console.log(
    //   scrollTop,
    //   clientHeight,
    //   scrollTop + clientHeight,
    //   scrollHeight
    // );
    if (scrollTop + clientHeight >= scrollHeight - 31) {
      if (scrollTop !== 0) {
        setCount((prev) => prev + 5);
      }
    }
  };
  // console.log(count);
  const infiniteScroll = throttle(useHandleScroll, 1000);

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
      {/* showModal이 true면 YoutubePlayer컴포넌트 반환, false이면 null */}
      {showModal && (
        <YoutubePlayer videoId={videoId} onCloseModal={setShowModal} />
      )}
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
  /* display: flex;
  justify-content: space-between;
  flex-direction: column; */
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
    -webkit-line-clamp: 3; /* 표시하고자 하는 라인 수 */
    -webkit-box-orient: vertical;
  }

  & h6 {
    font-size: 0.75rem;
    font-weight: normal;
    line-height: 1.24;
  }
`;
// todo https://jos39.tistory.com/211 ->나중에 css로 text overflow ...처리하려면 참고
// todo  https://d2.naver.com/helloworld/8540176 -> flex에 대한 설명
