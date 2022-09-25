import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";

const YoutubeContainer = () => {
  const videoId = useSelector((state) => state.collectionSlice.selectedVideoId);
  const videoList = useSelector((state) => state.collectionSlice.videos);
  const defaultVideoId = videoList[0]?.videoId;
  const baseUrl = "https://www.youtube.com/watch?v=";

  const youtubeConfig = {
    youtube: {
      playerVars: {
        rel: 0,
        fs: 1,
        modestbranding: 1,
      },
    },
  };
  return (
    <>
      {videoId ? (
        videoList?.map((elem) => {
          if (elem.videoId === videoId) {
            return (
              <PlayerWrapper key={elem._id}>
                <ReactPlayer
                  url={baseUrl + elem.videoId}
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
                />
              </PlayerWrapper>
            );
          }
        })
      ) : (
        <PlayerWrapper>
          <ReactPlayer
            url={baseUrl + defaultVideoId}
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
          />
        </PlayerWrapper>
      )}
    </>
  );
};

export default YoutubeContainer;
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
