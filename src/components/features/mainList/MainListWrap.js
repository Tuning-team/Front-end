import React from "react";
import TodaysWeatherCollections from "./TodaysWeatherCollections";
import RecommendedCollections from "./RecommendedCollections";
import FamousCollections from "./FamousCollections";
import RecentCollections from "./RecentCollections";
import SearchWrap from "../search/SearchWrap";
import RecommendedCategory from "./RecommendedCategory";
import Carousel from "../../common/Carousel";
import CarouselItem from "../../common/CarouselItem";
const MainListWrap = () => {
  const todaysWeatherCategoryId = "631e7d7a4ae4c133c405a965"; // 오늘 날씨에 추천하는
  const recommendedCategoryId = "631e7d7a4ae4c133c405a966"; // 바로 지금 추천하는
  const famousCategoryId = "6319aeebd1e330e86bbade9f"; // 인기있는
  const recentCategoryId = "631e7d7a4ae4c133c405a964"; // 새로운

  const sample = [
    "https://via.placeholder.com/320x180",
    "https://via.placeholder.com/320x180",
    "https://via.placeholder.com/320x180",
    "https://via.placeholder.com/320x180",
    "https://via.placeholder.com/320x180",
    "https://via.placeholder.com/320x180",
  ];
  return (
    <>
      <Carousel
        slidesToShow={1}
        centerMode={true}
        infinite={true}
        speed={500}
        centerPadding={"40px"}
        autoPlay={true}
        className={"center"}
      >
        {sample?.map((data, idx) => (
          <CarouselItem key={idx} src={data} alt={idx} />
        ))}
      </Carousel>
      <SearchWrap />
      <RecommendedCategory />

      <TodaysWeatherCollections categoryId={todaysWeatherCategoryId} />
      <RecommendedCollections categoryId={recommendedCategoryId} />
      <FamousCollections categoryId={famousCategoryId} />
      <RecentCollections categoryId={recentCategoryId} />
    </>
  );
};

export default MainListWrap;
