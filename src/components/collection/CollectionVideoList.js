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
  // console.log(videoList, pageInfo); // 이안에 hasNext랑 totalVideosView가 있음

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
    if (scrollTop + clientHeight >= scrollHeight) {
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
  // console.log("컴포넌트상의 count", count);

  return (
    <div>
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
    </div>
  );
};

export default CollectionVideoList;

const VideoContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
const Wrapper = styled.div`
  flex: none;
  width: 50%;
  height: auto;
  padding: 0.5rem 0;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const TextWrapper = styled.div`
  padding: 0.5rem;

  & h3 {
    font-weight: bold;
    font-size: 1rem;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    line-height: auto;
    max-height: 2rem;
    -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
    -webkit-box-orient: vertical;
  }
`;
// todo https://jos39.tistory.com/211 ->나중에 css로 text overflow ...처리하려면 참고
// todo  https://d2.naver.com/helloworld/8540176 -> flex에 대한 설명
