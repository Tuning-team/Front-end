import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { getCategoryCollectionForMain } from "../../redux/modules/tempCollectionSlice";
import { RecommendTitle } from "./Style";

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

  let keyWeather = "흐린";

  const mainImage = [
    { keyword: "", url: "clay-banks-_wkd7XBRfU4-unsplash.jpg" },
    { keyword: "맑은", url: "sonaal-bangera-kpDO0woxxec-unsplash.jpg" },
    { keyword: "흐린", url: "timothy-chan-FNWc_Dqsw2g-unsplash.jpg" },
    { keyword: "비오는", url: "rainnyday.jpg" },
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
        <h1>{keyWeather || "보통"} 날의 튜닝</h1>
        <h6>오늘같은 날 잘 어울리는 튜닝들</h6>
      </RecommendTitle>
    </section>
  );
};
export default TodaysWeatherCollections;
const MainImage = styled.div`
  background-image: url(${(props) => props.url});
  filter: brightness(0.8);
  max-width: 480px;
  height: 23.188rem;
`;
