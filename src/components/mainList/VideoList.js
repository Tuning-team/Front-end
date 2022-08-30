import React from "react";
import styled from "styled-components";

const VideoList = (props) => {
  return (
    <Wrapper>
      <VideoThumbnail></VideoThumbnail>
      <VideoTitle>{props.title || props.children}</VideoTitle>
    </Wrapper>
  );
};

export default VideoList;

const Wrapper = styled.div`
  border: 1px solid green;
  text-align: center;
  margin: 0 10px 0 0;
`;
const VideoThumbnail = styled.div`
  background-color: gainsboro;
  width: calc(50%-10px);
  height: 150px;
`;
const VideoTitle = styled.h3`
  display: inline-block;
  font-weight: bold;
  font-size: 1rem;
`;