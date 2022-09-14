import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ReactPlayer from "react-player/youtube";

const YoutubeContainer = () => {
  const videoList = useSelector((state) => state.collectionSlice.videos);
  const defaultVideoId = videoList[0]?.videoId;
  const videoId = useSelector((state) => state.collectionSlice.selectedVideoId);
  const baseUrl = "https://www.youtube.com/watch?v=";
  console.log("defaultVideoId:", defaultVideoId);
  console.log("videoId:", videoId, "/ booleanChk:", Boolean(videoId));

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
                  // light={true}
                  width="100%"
                  height="100%"
                  volume={0.5}
                  // playing={true} //자동재생?
                  // muted={true}
                  controls={false} //컨트롤박스, true면 유뷰트플레이어ui그대로 가져온대?
                  conifg={{
                    youtube: {
                      playerVars: {
                        rel: 0,
                        modestbranding: 1,
                        origin: "http://localhost:3000",
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
            // light={true}
            width="100%"
            height="100%"
            volume={0.5}
            // playing={true} //자동재생?
            // muted={true}
            controls={false} //컨트롤박스, true면 유뷰트플레이어ui그대로 가져온대?
            conifg={{
              youtube: {
                playerVars: {
                  rel: 0,
                  modestbranding: 1,
                  origin: "http://localhost:3000",
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
`;
