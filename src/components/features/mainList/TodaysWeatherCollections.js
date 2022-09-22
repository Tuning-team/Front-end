import React, { useEffect } from "react";
import styled from "styled-components";
import { getCategoryCollectionForMain } from "../../../redux/modules/categorySlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const TodaysWeatherCollections = ({ categoryId }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const categoryData = useSelector(
    (state) => state.categorySlice.categoryCollectionForMain.dataList
  );

  const finalData = categoryData.filter((x) => x.resName === "resOfWeather");
  const categoryTitle = finalData[0]?.resArr[0].category_title;
  let keyWeather = categoryTitle?.split(" ")[1];

  useEffect(() => {
    if (finalData.length === 0) {
      dispatch(getCategoryCollectionForMain(categoryId));
    }
  }, [categoryId]);

  const mainImage = [
    {
      keyword: "",
      url: "/images/weatherImage/clay-banks-_wkd7XBRfU4-unsplash.webp",
    },
    {
      keyword: "맑은",
      url: "/images/weatherImage/sonaal-bangera-kpDO0woxxec-unsplash.webp",
    },
    {
      keyword: "흐린",
      url: "/images/weatherImage/timothy-chan-FNWc_Dqsw2g-unsplash.webp",
    },
    { keyword: "비오는", url: "/images/weatherImage/rainnyday.webp" },
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
const RecommendTitle = styled.div`
  position: absolute;
  z-index: 1;
  left: 1rem;
  top: 16.2rem;
  display: flex;
  flex-direction: column;

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

  & h6 {
    font-size: 0.75rem;
    font-weight: normal;
    line-height: 1.24;
    color: white;
  }
`;
