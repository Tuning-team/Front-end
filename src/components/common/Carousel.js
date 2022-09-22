import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {
  //센터모드면, 클래스네임, 무한, 스피드, 센터패딩, 오토플레이 바뀜
  const settings = {
    className: props.className,
    dots: false,
    infinite: props.infinite || false,
    speed: props.speed || 100,
    slidesToShow: props.slidesToShow || 1.2,
    slidesToScroll: 1,
    adaptiveHeight: false,
    centerMode: props.centerMode || false,
    arrows: false,
    centerPadding: props.centerPadding || "0px",
    autoPlay: props.autoPlay || false,
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
  background-color: gray;
`;
const StyleSlider = styled(Slider)`
  /* 아이템 사이의 간격 조절 */
  & .slick-slide > div {
    margin: 0 0.25rem;
  }
  & .slick-list {
    margin: 0 -0.25rem;
  }
  & .slick-slide {
    /* 센터모드일때만 작동 */
    padding-top: ${(props) => (props.className ? "1rem" : "")};
    transform: ${(props) => (props.className ? "scale(0.9)" : "")};
  }
  /* 센터모드일때 가운데 이미지 강조 */
  & .slick-slide.slick-center img {
    transform: scale(1.2);
  }
`;
