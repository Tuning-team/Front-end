import React, { Children } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
  };

  return <StyleSlider {...settings}>{children}</StyleSlider>;
};
export default Carousel;
const StyleSlider = styled(Slider)`
  /* 아이템 사이의 간격 조절 */
  & .slick-slide > div {
    margin: 0 0.3rem;
  }
  & .slick-list {
    margin: 0 -0.3rem;
  }
`;
