import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CollectionSlide from "../../elements/CollectionSlide";
import { getCategoryCollection } from "../../redux/modules/collectionSlice";

const FamousCollections = () => {
  const dispatch = useDispatch();

  const popularCollections = useSelector(
    (state) => state.myCollectionSlice.categoryCollection
  );
  const isLoading = popularCollections.Loading;
  const collectionsData = popularCollections.data;

  let popularCollectionId = "6319aeebd1e330e86bbade9f"; //"인기있는"카테고리에 대한 id

  useEffect(() => {
    dispatch(getCategoryCollection(popularCollectionId));
  }, [isLoading]);

  return (
    <section>
      <H1>인기있는 튜닝</H1>
      <CollectionSlide>
        {collectionsData?.map((data) => (
          <CollectionFolder key={data._id}>
            <RepThumbnail url={data.thumbnails[0]} />
            <CollectionTitle>{data.collectionTitle}</CollectionTitle>
          </CollectionFolder>
        ))}
      </CollectionSlide>
    </section>
  );
};
// todo https://www.cluemediator.com/add-space-between-carousel-items-in-react-slick 리액트슬릭 마진 추가..
export default FamousCollections;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;
const CollectionFolder = styled.div`
  border: 2px solid blue;
  flex-shrink: 0;
  width: 130px;
  text-align: center;
`;
const RepThumbnail = styled.div`
  max-width: 320px;
  min-height: 180px;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const CollectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;
