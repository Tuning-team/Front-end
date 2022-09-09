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
    slidesToShow: 2.1, //스크린에 몇 개의 이미지를 보여줄 것인지
    rows: 1,
    slidesToScroll: 1, //스크롤할때 몇개가 넘어가는지
    arrows: false, //화살표 표시
    adaptiveHeight: true, //높이를 컨텐츠에 맞게 자동 조절
  };
  return (
    <SlideWrapper>
      <StyleSlider {...settings}>{children}</StyleSlider>
    </SlideWrapper>
  );
};
export default CollectionSlide;

const SlideWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  overflow-x: hidden;
`;
const StyleSlider = styled(Slider)``;
