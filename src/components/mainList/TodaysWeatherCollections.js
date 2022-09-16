import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { getCategoryCollectionForMain } from "../../redux/modules/tempCollectionSlice";
import { RecommendTitle } from "./Style";

import cloudyDay from "./image/timothy-chan-FNWc_Dqsw2g-unsplash.webp";
import sunnyDay from "./image/sonaal-bangera-kpDO0woxxec-unsplash.webp";
import ordinaryDay from "./image/clay-banks-_wkd7XBRfU4-unsplash.webp";
import rainnyDay from "./image/rainnyday.webp";

const TodaysWeatherCollections = ({ categoryId }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (finalData.length === 0) {
      dispatch(getCategoryCollectionForMain(categoryId));
    }
  }, [categoryId]);

  const categoryData = useSelector(
    (state) => state.collectionSlice.categoryCollectionForMain.dataList //배열인 상태임
  );
  const finalData = categoryData.filter((x) => x.resName === "resOfWeather");
  const categoryTitle = finalData[0]?.resArr[0].category_title;
  let keyWeather = categoryTitle?.split(" ")[1];

  const mainImage = [
    { keyword: "", url: ordinaryDay },
    { keyword: "맑은", url: sunnyDay },
    { keyword: "흐린", url: cloudyDay },
    { keyword: "비오는", url: rainnyDay },
  ];

  return (
    <section>
      {mainImage.map((elem) => {
        if (elem.keyword === keyWeather) {
          return <MainImage url={elem.url} key={elem.keyword} />;
        }
        return null;
      })}

      <RecommendTitle onClick={() => nav(`/category/${categoryId}`)}>
        <div className="recommendMark">
          <span>추천</span>
        </div>
        <h1>{keyWeather} 날의 튜닝</h1>
        <h6>{categoryTitle} 튜닝들</h6>
      </RecommendTitle>
    </section>
  );
};
export default TodaysWeatherCollections;

const MainImage = styled.div`
  max-width: 480px;
  height: 23.188rem;

  background-image: url(${(props) => props.url});
  filter: brightness(0.8);
`;
