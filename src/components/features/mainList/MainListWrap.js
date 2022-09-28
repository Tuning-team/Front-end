import React, { useState } from "react";
import styled from "styled-components";
import ChildrenCategories from "./ChildrenCategories";
import SearchInput from "../search/SearchInput";
import InterestedCategories from "./InterestedCategories";
import Carousel from "../../common/Carousel";
import CarouselItem from "../../common/CarouselItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainCategories } from "../../../redux/modules/categorySlice";
import { useNavigate } from "react-router-dom";
import Loading from "../../common/Loading";
import EventBanner from "./EventBanner";

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
        <Loading />
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
            {popular?.collections.map((collection) => (
              <CarouselItem
                key={collection._id}
                src={collection.thumbnails[0]}
                alt={collection._id}
                onClick={() => nav(`/collection/${collection._id}`)}
              />
            ))}
          </Carousel>
          <CarouselDesc>
            <h2>인기있는 튜닝</h2>
            <p>가장 많은 좋아요와 댓글을 획득한 튜닝들</p>
          </CarouselDesc>
        </div>
      )}
      <StyleBackground>
        <SearchInput backgroundColor={"#ffffff"} width={"auto"} />
        <EventBanner />
        <InterestedCategories />
      </StyleBackground>
      <ChildrenCategories recommend={recommend} recent={recent} />
    </>
  );
};

export default MainListWrap;
const CarouselDesc = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  right: 0;
  left: 0;
  height: 5.969rem;
  margin: 7.406rem 0 0;
  padding: 2.281rem 0 0 1.25rem;
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
    height: 1.813rem;
    margin-bottom: 0;
    padding-top: 0.6rem;
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
    margin: 0.6rem 0 0 0;
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
  background-color: #eeeef6;
  padding: 1.25rem 1.5rem 2.5rem 1.5rem;
`;
