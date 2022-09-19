import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: props.slidesToShow || 1.2,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
  };

  return (
    <SliderWrapper>
      <StyleSlider {...settings}>{props.children}</StyleSlider>
    </SliderWrapper>
  );
};
export default Carousel;

const SliderWrapper = styled.div`
  overflow-x: hidden;
`;
const StyleSlider = styled(Slider)`
  /* 아이템 사이의 간격 조절 */
  & .slick-slide > div {
    margin: 0 0.25rem;
  }
  & .slick-list {
    margin: 0 -0.25rem;
  }
`;
