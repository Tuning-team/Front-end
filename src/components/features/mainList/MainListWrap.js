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
import Loading from "../../common/Loading";

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
      {loading ? (
        <div style={{ minHeight: "180px", width: "100%" }}>
          <Loading />
        </div>
      ) : (
        <div style={{ position: "relative" }}>
          <Carousel
            slidesToShow={1}
            centerMode={true}
            infinite={true}
            speed={500}
            centerPadding={"50px"}
            autoPlay={true}
            className={"center"}
            height={"15.625rem"}
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
            <h2>가이드 텍스트</h2>
            <p>일주일동안 최다 좋아요를 보유한 음악컬렉션</p>
          </CarouselDesc>
        </div>
      )}
      <StyleBackground>
        <SearchWrap />
        <InterestedCategories />
      </StyleBackground>
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
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 23.438rem;
  height: 5.969rem;
  margin: 7.406rem 0 0;
  padding: 2.281rem 6.063rem 0.625rem 1.25rem;
  /* mix-blend-mode: multiply; */
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.13) 8%,
    rgba(0, 0, 0, 0.54) 37%,
    rgba(0, 0, 0, 0.8) 70%,
    #000
  );
  & h2 {
    height: 1.781rem;
    margin: 0 7.938rem 0.031rem 0;

    font-size: 1.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  }
  & p {
    height: 1.25rem;
    margin: 0.031rem 0 0;

    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #adadad;
  }
`;
const StyleBackground = styled.div`
  /* width: 23.438rem; */
  /* height: 34.375rem; */
  /* margin: 15.625rem 0 1.875rem; */
  /* padding: 1.125rem 0.031rem 2.5rem 0; */
  background-color: #eeeef6;
`;
