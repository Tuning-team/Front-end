import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { getCategoryCollectionForMain } from "../../../redux/modules/tempCollectionSlice";
import { getMainCategoryCollection } from "../../../redux/modules/categorySlice";
import Carousel from "../../common/Carousel";
import CarouselItem from "../../common/CarouselItem";

const RecommendedCollections = () => {
  const recommendedCategoryId = "631e7d7a4ae4c133c405a966"; // 바로 지금 추천하는
  const dispatch = useDispatch();
  const nav = useNavigate();

  // const categoryData = useSelector(
  //   (state) => state.collectionSlice.categoryCollectionForMain.dataList
  // );
  // const finalData = categoryData.filter((x) => x.resName === "resOfRecommend");
  // useEffect(() => {
  //   if (finalData.length === 0) {
  //     dispatch(getCategoryCollectionForMain(categoryId));
  //   }
  // }, [categoryId]);
  useEffect(() => {
    // dispatch(getMainCategoryCollection("631e7d7a4ae4c133c405a966"));
  }, []);
  const data = useSelector(
    (state) => state.categorySlice.mainCategoryCollection.data
  );
  // const recomendedCollections = [...new Set(...data)];
  // console.log(recomendedCollections);
  return (
    <Section>
      <h1>지금 추천하는 튜닝</h1>
      <Carousel slidesToShow={2.2}>
        {/* {finalData[0]?.resArr.map((data) => (
          <CarouselItem
            key={data._id}
            src={data.thumbnails[0]}
            alt={data.thumbnails[0]}
            title={data.collectionTitle}
            onClick={() => nav(`collection/${data._id}`)}
          />
        ))} */}
      </Carousel>
    </Section>
  );
};
export default RecommendedCollections;
const Section = styled.div`
  margin-left: 1rem;
  margin-top: 2.625rem;

  & h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.24;

    margin-bottom: 1.313rem;
  }
`;
