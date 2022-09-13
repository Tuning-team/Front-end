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

  useEffect(() => {
    if (finalData.length === 0) {
      dispatch(getCategoryCollectionForMain(categoryId));
    }
  }, [categoryId]);

  const categoryData = useSelector(
    (state) => state.collectionSlice.categoryCollectionForMain.dataList //배열인 상태임
  );
  const finalData = categoryData.filter((x) => x.resName === "resOfWeather");

  return (
    <section>
      <RecommendTitle>
        <div className="recommendMark">
          <span>추천</span>
        </div>
        <h1>비오는 날의 튜닝 </h1>
        <h6>가을에 나들이하기 좋은 곳</h6>
      </RecommendTitle>
      <Carousel>
        {finalData[0]?.resArr.map((data) => (
          <CarouselItem
            key={data._id}
            onClick={() => nav(`collection/${data._id}`)}
            src={data.thumbnails[0]}
            alt={data.videos[0]}
            title={data.collectionTitle}
          />
        ))}
      </Carousel>
    </section>
  );
};
export default TodaysWeatherCollections;

const RecommendTitle = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  background-color: pink;

  & .recommendMark {
    border: 1px solid white;
    border-radius: 3px;

    width: 2.313rem;
    height: 1.375rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 0.438rem;
    & span {
      font-size: 0.75rem;
      line-height: 1.24;

      color: white;
    }
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.24;
    color: white;

    margin-bottom: 0.438rem;
  }
`;
