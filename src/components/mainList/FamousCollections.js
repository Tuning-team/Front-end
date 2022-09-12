import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Carousel from "../../common/Carousel";
import CarouselItem from "../../common/CarouselItem";
import { useNavigate } from "react-router-dom";
import { getCategoryCollectionForMain } from "../../redux/modules/tempCollectionSlice";

const FamousCollections = ({ categoryId }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (finalData.length === 0) {
      dispatch(getCategoryCollectionForMain(categoryId));
    }
  }, [categoryId]);

  const categoryData = useSelector(
    (state) => state.collectionSlice.categoryCollectionForMain.dataList //배열인 상태임
  );
  const finalData = categoryData.filter((x) => x.resName === "resOfFamous");

  // !-----------여기까지 기본 로직이고 아래는 반응형캐로셀
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 5,
  //   slidesToScroll: 3,
  //   initialSlide: 0,
  //   arrows: false, //화살표 표시
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         initialSlide: 0,
  //         slidesToShow: 2.1,
  //         slidesToScroll: 2,
  //       },
  //     },
  //   ],
  // };

  // !https://react.libhunt.com/compare-react-slick-vs-swiper => 고민해보기...
  return (
    <section>
      <H1>인기있는 튜닝</H1>
      <Carousel slidesToShow="2.2">
        {finalData[0]?.resArr.map((data) => (
          <CarouselItem
            key={data._id}
            onClick={() => nav(`collection/${data._id}`)}
            src={data.thumbnails[0]}
            alt={data.videos[0]}
            title={data.collectionTitle}
          />
        ))}
      </Carousel>
    </section>
  );
};

// ! https://github.com/akiran/react-slick/issues/2007 => 반응형에서 안된ㄴ 이유?
// todo https://www.cluemediator.com/add-space-between-carousel-items-in-react-slick 리액트슬릭 마진 추가..

export default FamousCollections;

const DivCard = styled.div`
  border: 1px solid black;
  max-width: 320px;
  &:hover {
    cursor: pointer;
  }
  & .card-top {
    /* background-color: white; */
  }
  & .card-top > img {
    max-width: 320px;
    max-height: 180px;
    width: 100%;
    border-radius: 3px;
  }
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;
