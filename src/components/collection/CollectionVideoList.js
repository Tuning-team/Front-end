import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getVideoList } from "../../redux/modules/tempCollectionSlice";

const CollectionVideoList = ({ collectionId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoList(collectionId));
  }, []);

  const videoList = useSelector((state) => state.collectionSlice.videos);

  return (
    <div>
      {videoList?.map((elem) => {
        return (
          <VideoContainer key={elem._id}>
            {/* <img src={elem.thumbnails} alt="썸네일" /> */}
            <Img src={elem.thumbnails} alt={elem._id} />
            <div>
              <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {elem.videoTitle}
              </h3>
              <h6>{elem.channelTitle}</h6>
            </div>
          </VideoContainer>
        );
      })}
    </div>
  );
};

export default CollectionVideoList;

const VideoContainer = styled.div`
  display: flex;
  border: 1px solid black;
`;
const Img = styled.img`
  width: 45%;
`;
// todo https://jos39.tistory.com/211 ->나중에 css로 text overflow ...처리하려면 참고
