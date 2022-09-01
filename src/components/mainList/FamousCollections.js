import React from "react";
import styled from "styled-components";
import CollectionSlide from "../../elements/CollectionSlide";

const FamousCollections = () => {
  const mockdata = [
    {
      collectionTitle: "우울할때 보는영상",
      id: 0,
      likes: 3,
      comments: 23,
      thumbnail: [
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
      ],
    },
    {
      collectionTitle: "배고플때 보는영상",
      id: 1,
      likes: 3,
      comments: 23,
      thumbnail: [
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
      ],
    },
    {
      collectionTitle: "웃긴영상 모음집",
      id: 2,
      likes: 5,
      comments: 21,
      thumbnail: [
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
      ],
    },
  ];
  return (
    <section>
      <H1>인기있는 컬렉션들</H1>
      <CollectionSlide>
        {mockdata?.map((data) => (
          <CollectionFolder key={data.id}>
            <ThumbnailWrapper>
              {data.thumbnail?.map((src, idx) => (
                <Img src={src} key={idx} />
              ))}
            </ThumbnailWrapper>
            <CollectionTitle>{data.collectionTitle}</CollectionTitle>
          </CollectionFolder>
        ))}
      </CollectionSlide>
    </section>
  );
};
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
const ThumbnailWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  width: 120px;
  gap: 5px;
  justify-content: space-evenly;
  margin: 0 auto;
`;
const CollectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  border: 1px solid green;
`;
const Img = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  background-image: url(${(props) => props.src});
  background-position: center;
`;
