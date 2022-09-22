import React, { useState } from "react";
import styled from "styled-components";
import TodaysWeatherCollections from "./TodaysWeatherCollections";
import RecommendedCollections from "./RecommendedCollections";
import FamousCollections from "./FamousCollections";
import RecentCollections from "./RecentCollections";
import SearchWrap from "../search/SearchWrap";
import InterestedCategories from "./InterestedCategories";
import Carousel from "../../common/Carousel";
import CarouselItem from "../../common/CarouselItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainCategories } from "../../../redux/modules/categorySlice";
import { useNavigate } from "react-router-dom";
import Modal from "../../common/Modal";
import { getUserInterest } from "../../../redux/modules/userSlice";

const MainListWrap = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const { data, loading } = useSelector(
    (state) => state.categorySlice.mainCategories
  );

  const weather = data[0]?.res1;
  const recommend = data[1]?.res2;
  const popular = data[2]?.res3;
  const recent = data[3]?.res4;

  useEffect(() => {
    dispatch(
      getMainCategories({
        category_ids: [
          "631e7d7a4ae4c133c405a965",
          "631e7d7a4ae4c133c405a966",
          "6319aeebd1e330e86bbade9f",
          "631e7d7a4ae4c133c405a964",
        ],
      })
    );
  }, []);

  return (
    <>
      <Carousel
        slidesToShow={1}
        centerMode={true}
        infinite={true}
        speed={500}
        centerPadding={"40px"}
        autoPlay={true}
        className={"center"}
      >
        {recommend?.collections.map((collection) => (
          <CarouselItem
            key={collection._id}
            src={collection.thumbnails[0]}
            alt={collection._id}
            onClick={() => nav(`collection/${collection._id}`)}
          />
        ))}
      </Carousel>
      <CarouselDesc>
        <span>가이드 텍스트</span>일주일동안 최다 좋아요를 보유한 음악컬렉션
      </CarouselDesc>
      <SearchWrap />
      <InterestedCategories />

      {/* --------------- mvp때 썼던 코드... ----------------------------------- */}
      {/* <TodaysWeatherCollections categoryId={weatherCategoryId} /> */}
      {/* <RecommendedCollections categoryId={recommendedCategoryId} /> */}
      <FamousCollections popular={popular} />
      {/* <RecentCollections /> */}
    </>
  );
};

export default MainListWrap;
const CarouselDesc = styled.div`
  position: relative;
  top: -2rem;
  left: 1rem;
  & span {
    font-weight: bold;
    display: block;
  }
`;
