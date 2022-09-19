import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategoryCollectionForMain } from "../../../redux/modules/tempCollectionSlice";
import Carousel from "../../common/Carousel";
import CarouselItem from "../../common/CarouselItem";

const RecentCollections = ({ categoryId }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const categoryData = useSelector(
    (state) => state.collectionSlice.categoryCollectionForMain.dataList
  );
  const finalData = categoryData.filter((x) => x.resName === "resOfRecent");

  useEffect(() => {
    if (finalData.length === 0) {
      dispatch(getCategoryCollectionForMain(categoryId));
    }
  }, [categoryId]);

  return (
    <Section>
      <h1>새로운 튜닝</h1>
      <Carousel slidesToShow={2.2}>
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
    </Section>
  );
};
export default RecentCollections;
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
