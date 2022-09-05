import React from "react";
import styled from "styled-components";

const CollectionVideoList = () => {
  return (
    <div>
      {/* map으로 돌릴친구.. */}
      <VideoContainer>
        <img src="https://via.placeholder.com/150x150" alt="썸네일" />
        <div>
          <h3 style={{ fontWeight: "bold", fontSize: "2rem" }}>영상제목</h3>
          <h6>유튜버이름</h6>
        </div>
      </VideoContainer>
    </div>
  );
};

export default CollectionVideoList;

const VideoContainer = styled.div`
  display: flex;
  border: 1px solid black;
`;
