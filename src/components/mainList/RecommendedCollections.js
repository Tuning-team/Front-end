import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCollectionForMain } from "../../redux/modules/tempCollectionSlice";
import Carousel from "../../common/Carousel";
import CarouselItem from "../../common/CarouselItem";
import { useNavigate } from "react-router-dom";

const RecommendedCollections = ({ categoryId }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  useEffect(() => {
    if (finalData.length === 0) {
      dispatch(getCategoryCollectionForMain(categoryId));
    }
  }, [categoryId]);

  const categoryData = useSelector(
    (state) => state.collectionSlice.categoryCollectionForMain.dataList //배열인 상태임
  );
  const finalData = categoryData.filter((x) => x.resName === "resOfRecommend");

  return (
    <>
      <H1>지금 추천하는 튜닝</H1>
      <Carousel slidesToShow="2.2">
        {finalData[0]?.resArr.map((data) => (
          <CarouselItem
            key={data._id}
            src={data.thumbnails[0]}
            alt={data.thumbnails[0]}
            title={data.collectionTitle}
            onClick={() => nav(`collection/${data._id}`)}
          />
        ))}
      </Carousel>
    </>
  );
};
export default RecommendedCollections;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;
