import React from "react";
import Slider from "react-slick"; // 슬라이더 패키지
import VideoList from "./VideoList";

import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const UserCollections = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
  };

  const temp = [
    { title: "하나" },
    { title: "둘" },
    { title: "셋" },
    { title: "넷" },
    { title: "다서엇" },
  ];
  return (
    <section>
      <H1>제주도가 가고 싶을 때🍊</H1>
      <CollectionWrapper>
        <Slider {...settings}>
          {temp?.map((video, idx) => {
            if (idx < 3) {
              return <VideoList key={idx} title={video.title} />;
            } else if (idx === 3) {
              return <VideoList key={idx}>더보기</VideoList>;
            }
            return null;
          })}
        </Slider>
      </CollectionWrapper>
    </section>
  );
};
export default UserCollections;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;
const CollectionWrapper = styled.div`
  position: relative;
  border: 1px solid black;
  margin: 0 auto;
  overflow-x: hidden;
`;
