import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategoryCollectionForMain } from "../../redux/modules/tempCollectionSlice";
import Carousel from "../../common/Carousel";
import CarouselItem from "../../common/CarouselItem";
import { Section } from "./Style";

const RecentCollections = ({ categoryId }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    if (finalData.length === 0) {
      dispatch(getCategoryCollectionForMain(categoryId));
    }
  }, [categoryId]);
  const categoryData = useSelector(
    (state) => state.collectionSlice.categoryCollectionForMain.dataList //배열인 상태임
  );
  const finalData = categoryData.filter((x) => x.resName === "resOfRecent");

  return (
    <Section>
      <h1>새로운 튜닝</h1>
      <Carousel slidesToShow={2.2}>
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
    </Section>
  );
};
export default RecentCollections;
