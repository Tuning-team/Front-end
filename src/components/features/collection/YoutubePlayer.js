import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";

const YoutubePlayer = () => {
  const videoId = useSelector((state) => state.collectionSlice.selectedVideoId);
  const videoList = useSelector((state) => state.collectionSlice.videos);
  const defaultVideoId = videoList[0]?.videoId;
  const baseUrl = "http://www.youtube.com/watch?v=";
  const id = videoList.map((x) => x.videoId);
  const youtubeConfig = {
    youtube: {
      playerVars: {
        rel: 0,
        fs: 1,
        modestbranding: 1,
      },
    },
  };
  //!비디오 클릭시
  const [test, setTest] = useState(defaultVideoId);
  useEffect(() => {
    setTest(videoId);
  }, [videoId]);
  //!디폴트비디오
  useEffect(() => {
    defaultVideoId && setTest(defaultVideoId);
  }, [defaultVideoId]);
  return (
    <>
      <PlayerWrapper>
        <ReactPlayer
          // url={baseUrl + elem.videoId}
          url={baseUrl + test}
          className="player"
          light={true}
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          volume={0.3}
          controls={true}
          playsinline={false}
          conifg={youtubeConfig}
          onEnded={() => {
            const num = id.indexOf(test);
            setTest(videoList[num + 1].videoId);
          }}
        />
      </PlayerWrapper>
    </>
  );
};

export default YoutubePlayer;
const PlayerWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  padding-top: 56.25%;

  & .player,
  .react-player__preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  & .react-player__shadow {
    background-color: orange;
  }
`;
