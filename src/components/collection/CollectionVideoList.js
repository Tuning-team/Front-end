import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getVideoList } from "../../redux/modules/tempCollectionSlice";
import YoutubePlayer from "./YoutubePlayer";

const CollectionVideoList = ({ collectionId }) => {
  const dispatch = useDispatch();

  const videoList = useSelector((state) => state.collectionSlice.videos);
  console.log(videoList);

  useEffect(() => {
    dispatch(getVideoList(collectionId));
  }, []);

  const [testVideoId, setTestVideoId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onPlayVideo = (videoId) => {
    setTestVideoId(videoId);
    setShowModal(true);
  };
  console.log(testVideoId, showModal);
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
              {/* <YoutubePlayer videoId={elem.videoId} /> */}
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
        <YoutubePlayer videoId={testVideoId} onCloseModal={setShowModal} />
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
