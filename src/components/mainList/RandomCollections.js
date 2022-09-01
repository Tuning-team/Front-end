import React from "react";
import styled from "styled-components";
import CollectionSlide from "../../elements/CollectionSlide";
import VideoList from "./VideoList";

const RandomCollections = () => {
  const temp = [
    { id: 0, title: "하나", img: "https://via.placeholder.com/150x150" },
    { id: 1, title: "둘", img: "https://via.placeholder.com/150x150" },
    { id: 2, title: "셋", img: "https://via.placeholder.com/150x150" },
    { id: 3, title: "넷", img: "https://via.placeholder.com/150x150" },
    { id: 4, title: "다서엇", img: "https://via.placeholder.com/150x150" },
  ];
  return (
    <section style={{ marginBottom: "50px" }}>
      <H1>오늘의 컬렉션~</H1>
      <CollectionSlide>
        {temp?.map((data, idx) => {
          if (idx < 3) {
            return (
              <VideoList key={data.id} title={data.title} img={data.img} />
            );
          } else if (idx === 3) {
            return (
              <VideoList key={data.id} img={data.img}>
                더보기
              </VideoList>
            );
          }
          return null;
        })}
      </CollectionSlide>
    </section>
  );
};
export default RandomCollections;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;
