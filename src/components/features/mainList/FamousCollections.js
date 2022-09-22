import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCollectionForMain } from "../../../redux/modules/categorySlice";
import Carousel from "../../common/Carousel";
import CarouselItem from "../../common/CarouselItem";

const FamousCollections = ({ popular }) => {
  const nav = useNavigate();
  return (
    <Section>
      <h1>{popular?.categoryInfo.category_name} 튜닝</h1>
      <Carousel slidesToShow={1.3}>
        {popular?.collections.map((collection) => (
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

export default FamousCollections;
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
