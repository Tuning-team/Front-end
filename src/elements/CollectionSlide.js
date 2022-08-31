import React from "react";
import Slider from "react-slick";

import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CollectionSlide = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <SlideWrapper>
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  );
};
export default CollectionSlide;

const SlideWrapper = styled.div`
  position: relative;
  border: 1px solid black;
  margin: 0 auto;
  overflow-x: hidden;
`;
