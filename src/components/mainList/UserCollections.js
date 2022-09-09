import React from "react";
import VideoList from "./VideoList";
import styled from "styled-components";
import CollectionSlide from "../../elements/CollectionSlide";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCollection,
  getVideoList,
} from "../../redux/modules/tempCollectionSlice";
import { useEffect, useState } from "react";

const UserCollections = () => {
  const nav = useNavigate();
  const dispatch = useDispatch(null);
  const [data, setData] = useState();
  const displayedUserCollection = useSelector(
    (state) => state.collectionSlice.data
  );
  // ! 임시로 넣어놓은 collectionID
  let collectionId = "631a068c18564991703a8770";
  useEffect(() => {
    dispatch(getCollection(collectionId));
  }, []);
  useEffect(() => {
    setData(...displayedUserCollection);
    dispatch(getVideoList(collectionId));
  }, [displayedUserCollection]);

  const videosOfUserCollection = useSelector(
    (state) => state.collectionSlice.videos
  );

  return (
    <section>
      <H1 onClick={() => nav(`/collection/${data._id}`)}>
        {data?.collectionTitle}
      </H1>
      <CollectionSlide>
        {videosOfUserCollection?.map((elem) => {
          return (
            <VideoList
              key={elem._id}
              title={elem.videoTitle}
              img={elem.thumbnails}
            />
          );
        })}
      </CollectionSlide>
    </section>
  );
};
export default UserCollections;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;
