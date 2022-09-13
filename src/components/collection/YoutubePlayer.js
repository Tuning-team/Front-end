import React from "react";
import styled from "styled-components";

import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId, onCloseModal }) => {
  console.log(videoId);
  const opts = {
    playerVars: {
      autoplay: 1, //자동재생(로드되자마자)은 1,
      rel: 0, //관련 동영상 표시하지 않음
      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
      playsinline: 0, //재생시 전체 화면으로 재생..1: 이 값을 지정하면 TRUE로 설정된 allowsInlineMediaPlayback 속성과 함께 만들어진 UIWebViews이 인라인으로 재생됩니다.
      fs: 1, //전체화면활성화아이콘
      // origin: window.location.origin, //! 해결안됨...뜨는애들있고 아닌애들있고...하
      origin: "http://localhost:3000", //! 이친구로 해결..이 아니었음 ;;;;이거 쓰니까 cross-site error도 줄음
    },
  };
  // todo 유튜브 재생 끝나면 화면 닫을 수 있게 해야되지 않을까?

  return (
    <ModalContainer>
      <button onClick={() => onCloseModal(false)}>닫기</button>
      <Modal>
        <VideoHolder>
          <YouTube videoId={videoId} opts={opts} />
        </VideoHolder>
      </Modal>
    </ModalContainer>
  );
};
export default YoutubePlayer;

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
`;
const Modal = styled.div`
  position: absolute;
  background-color: white;
  width: 150px;
  height: 150px;
`;
const VideoHolder = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;

  & iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
