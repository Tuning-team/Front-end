import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ReactPlayer from "react-player/youtube";
import icon_play from "../../svg/icon_play.svg";

const YoutubeContainer = () => {
  const videoList = useSelector((state) => state.collectionSlice.videos);

  const defaultVideoId = videoList[0]?.videoId;
  const videoId = useSelector((state) => state.collectionSlice.selectedVideoId);

  const baseUrl = "https://www.youtube.com/watch?v=";

  // todo custom control bar를 위한 빌드업 중..
  // const [pause, setPause] = useState(true);
  // const [muted, setMuted] = useState(true);
  // const onPause = () => {
  //   setPause((prev) => !prev);
  //   console.log(pause);
  // };
  // const onVolume = () => {
  //   setMuted((prev) => !prev);
  // };

  return (
    <>
      {videoId ? (
        videoList?.map((elem) => {
          if (elem.videoId === videoId) {
            return (
              <PlayerWrapper key={elem._id}>
                <ReactPlayer
                  className="player"
                  url={baseUrl + elem.videoId}
                  light={true}
                  width="100%"
                  height="100%"
                  playing={true}
                  muted={true}
                  volume={0.3}
                  controls={true}
                  playsinline={false} //ios에서 전체화면재생
                  conifg={{
                    youtube: {
                      playerVars: {
                        rel: 0,
                        fs: 1,
                        modestbranding: 1,
                      },
                    },
                  }}
                />
              </PlayerWrapper>
            );
          }
        })
      ) : (
        <PlayerWrapper>
          <ReactPlayer
            className="player"
            url={baseUrl + defaultVideoId}
            light={true}
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            volume={0.3}
            controls={true}
            playsinline={false} //ios에서 전체화면재생
            conifg={{
              youtube: {
                playerVars: {
                  rel: 0,
                  modestbranding: 1,
                },
              },
            }}
          />
        </PlayerWrapper>
      )}
    </>
  );
};

export default YoutubeContainer;
const PlayerWrapper = styled.div`
  position: relative;
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

{
  /* <button onClick={onPause}>{pause ? "일시정지" : "다시재생"}</button>
      <button onClick={onVolume}>볼륨조절</button>
      <img
        src={icon_play}
        onClick={() => {
          onPause((prev) => !prev);
        }}
        alt="icon_play"
        style={{ border: "1px solid black" }}
      /> */
}
