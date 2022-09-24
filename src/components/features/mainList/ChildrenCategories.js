import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCollectionForMain } from "../../../redux/modules/categorySlice";
import Carousel from "../../common/Carousel";
import CarouselItem from "../../common/CarouselItem";

const ChildrenCategories = (props) => {
  const nav = useNavigate();

  const recommend = props.recommend;
  const recent = props.recent;

  return (
    <Section>
      <h1>{recommend?.categoryInfo.category_name} 튜닝</h1>
      <Carousel slidesToShow={1.3}>
        {recommend?.collections.map((collection) => (
          <CarouselItem
            key={collection._id}
            onClick={() => nav(`collection/${collection._id}`)}
            src={collection.thumbnails[0]}
            alt={collection.videos[0]}
            title={collection.collectionTitle}
          />
        ))}
      </Carousel>
      <h1>{recent?.categoryInfo.category_name} 튜닝</h1>
      <Carousel slidesToShow={1.3}>
        {recent?.collections.map((collection) => (
          <CarouselItem
            key={collection._id}
            onClick={() => nav(`collection/${collection._id}`)}
            src={collection.thumbnails[0]}
            alt={collection.videos[0]}
            title={collection.collectionTitle}
          />
        ))}
      </Carousel>
    </Section>
  );
};

export default ChildrenCategories;

const Section = styled.div`
  margin-left: 1.25rem;
  margin-top: 1.875rem;

  & h1 {
    font-size: 1.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.6px;
    height: 2.25rem;
    margin-top: 0;
    margin-bottom: 0.625rem;
  }
  & h1:not(:first-of-type) {
    margin-top: 1.875rem;
  }
`;
