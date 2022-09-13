import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ReactPlayer from "react-player/youtube";

const YoutubeContainer = ({ videoId }) => {
  let testUrl = "https://www.youtube.com/watch?v=";
  const test = useSelector((state) => state.collectionSlice.videos);
  console.log("test", test);
  return (
    <>
      {/* {test?.map((elem, idx) => ( */}
      <PlayerWrapper>
        <ReactPlayer
          url={testUrl + videoId}
          light={true}
          width="100%"
          height="100%"
          style={{ border: "1px solid black", boxSizing: "border-box" }}
        />
      </PlayerWrapper>
      {/* ))} */}
    </>
  );
};

export default YoutubeContainer;
const PlayerWrapper = styled.div`
  /* 아래 두 줄 나중에 지울 내용! */
  min-width: 375px;
  min-height: 210.93px;
  background-color: rgba(0, 0, 0, 0.2);
`;
