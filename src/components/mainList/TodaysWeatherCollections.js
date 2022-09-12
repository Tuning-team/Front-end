import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getCategoryCollection } from "../../redux/modules/collectionSlice";
import Carousel from "../../common/Carousel";
import CarouselItem from "../../common/CarouselItem";
import { useNavigate } from "react-router-dom";
import { getCategoryCollectionForMain } from "../../redux/modules/tempCollectionSlice";

const TodaysWeatherCollections = ({ categoryId }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // const recentCollections = useSelector(
  //   (state) => state.collectionSlice.categoryCollectionForMain.data
  // );
  // const collectionsData = recentCollections.data;

  // useEffect(() => {
  //   dispatch(getCategoryCollectionForMain(categoryId));
  // }, []);

  return (
    <section>
      <H1>오늘의 날씨와 어울리는 튜닝</H1>
      <RecommendTitle>
        <div>추천</div>
        <h1>가을 추천 튜닝 </h1>
        <h6>가을에 나들이하기 좋은 곳</h6>
      </RecommendTitle>
      {/* <Carousel slidesToShow="2.2">
        {collectionsData?.map((data) => (
          <CarouselItem
            key={data._id}
            onClick={() => nav(`collection/${data._id}`)}
            src={data.thumbnails[0]}
            alt={data.videos[0]}
            title={data.collectionTitle}
          />
        ))}
      </Carousel> */}
    </section>
  );
};
export default TodaysWeatherCollections;

const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;
const RecommendTitle = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;
