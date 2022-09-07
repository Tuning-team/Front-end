import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId }) => {
  const opts = {
    playerVars: {
      autoplay: 0, //자동재생(로드되자마자)은 1,
      rel: 0, //관련 동영상 표시하지 않음
      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
      playsinline: 0, //재생시 전체 화면으로 재생..1: 이 값을 지정하면 TRUE로 설정된 allowsInlineMediaPlayback 속성과 함께 만들어진 UIWebViews이 인라인으로 재생됩니다.
      fs: 1, //전체화면활성화아이콘
    },
  };
  return <YouTube videoId={videoId} opts={opts} />;
};
export default YoutubePlayer;
