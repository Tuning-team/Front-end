import React from "react";
import Slider from "react-slick"; // 슬라이더 패키지
import VideoList from "./VideoList";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollectionSlide from "../../elements/CollectionSlide";

const UserCollections = () => {
  const temp = [
    { id: 0, title: "하나", img: "https://via.placeholder.com/150x150" },
    { id: 1, title: "둘", img: "https://via.placeholder.com/150x150" },
    { id: 2, title: "셋", img: "https://via.placeholder.com/150x150" },
    { id: 3, title: "넷", img: "https://via.placeholder.com/150x150" },
    { id: 4, title: "다서엇", img: "https://via.placeholder.com/150x150" },
  ];
  return (
    <section>
      <H1>제주도가 가고 싶을 때🍊</H1>
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
export default UserCollections;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;
