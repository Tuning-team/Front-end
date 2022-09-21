import React, { useState } from "react";
import styled from "styled-components";
import TodaysWeatherCollections from "./TodaysWeatherCollections";
import RecommendedCollections from "./RecommendedCollections";
import FamousCollections from "./FamousCollections";
import RecentCollections from "./RecentCollections";
import SearchWrap from "../search/SearchWrap";
import RecommendedCategory from "./RecommendedCategory";
import Carousel from "../../common/Carousel";
import CarouselItem from "../../common/CarouselItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainCategoryCollection } from "../../../redux/modules/categorySlice";
import { useNavigate } from "react-router-dom";
import Modal from "../../common/Modal";
import { getUserInterest } from "../../../redux/modules/userSlice";

const MainListWrap = () => {
  const todaysWeatherCategoryId = "631e7d7a4ae4c133c405a965"; // 오늘 날씨에 추천하는
  const recommendedCategoryId = "631e7d7a4ae4c133c405a966"; // 바로 지금 추천하는
  const famousCategoryId = "6319aeebd1e330e86bbade9f"; // 인기있는
  const recentCategoryId = "631e7d7a4ae4c133c405a964"; // 새로운

  const dispatch = useDispatch();
  const nav = useNavigate();

  // const data = useSelector(
  //   (state) => state.categorySlice.mainCategoryCollection.data
  // );
  // console.log(data);
  // const test = data.filter(
  //   (arr, index, callback) =>
  //     index === callback.findIndex((t) => t._id === arr._id)
  // );

  // console.log(test);

  useEffect(() => {
    // dispatch(getMainCategoryCollection("6319aeebd1e330e86bbade9f"));
    // dispatch(getMainCategoryCollection("631e7d7a4ae4c133c405a966"));
    dispatch(getUserInterest());
  }, []);

  // 모달을 위한 useState와 eventHandler
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      {/* <button onClick={showModal}>모달체커/지울거에용</button> */}
      {/* <Modal setModal={setModal} modal={modal}>
        텍스트 입력
      </Modal> */}
      <Carousel
        slidesToShow={1}
        centerMode={true}
        infinite={true}
        speed={500}
        centerPadding={"40px"}
        autoPlay={true}
        className={"center"}
      >
        {/* {popularCollections?.map((collection) => (
          <CarouselItem
            key={collection._id}
            src={collection.thumbnails[0]}
            alt={collection._id}
            onClick={() => nav(`collection/${collection._id}`)}
          />
        ))} */}
      </Carousel>
      <CarouselDesc>
        <span>가이드 텍스트</span>일주일동안 최다 좋아요를 보유한 음악컬렉션
      </CarouselDesc>

      <SearchWrap />
      <RecommendedCategory />

      {/* <TodaysWeatherCollections categoryId={todaysWeatherCategoryId} /> */}
      {/* <RecommendedCollections categoryId={recommendedCategoryId} /> */}
      {/* <FamousCollections categoryId={famousCategoryId} />
      <RecentCollections categoryId={recentCategoryId} /> */}
    </>
  );
};

export default MainListWrap;
const CarouselDesc = styled.div`
  /* position: relative;
  top: -2rem;
  left: 1rem; */
  & span {
    font-weight: bold;
    display: block;
  }
`;
