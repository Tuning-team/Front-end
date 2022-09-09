import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CollectionSlide from "../../elements/CollectionSlide";
import { getCategoryCollection } from "../../redux/modules/collectionSlice";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FamousCollections = () => {
  const dispatch = useDispatch();

  const popularCollections = useSelector(
    (state) => state.myCollectionSlice.categoryCollection
  );
  const isLoading = popularCollections.Loading;
  const collectionsData = popularCollections.data;

  let popularCollectionId = "6319aeebd1e330e86bbade9f"; //"인기있는"카테고리에 대한 id

  useEffect(() => {
    dispatch(getCategoryCollection(popularCollectionId));
  }, [isLoading]);
  // !-----------여기까지 기본 로직이고 아래는 캐로셀
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false, //화살표 표시
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <section>
      <H1>인기있는 튜닝</H1>
      <StyleSlider {...settings}>
        {collectionsData?.map((data) => (
          // <CollectionFolder key={data._id}>
          //   <RepThumbnail url={data.thumbnails[0]} />
          //   <CollectionTitle>{data.collectionTitle}</CollectionTitle>
          // </CollectionFolder>
          <DivCard className="card" key={data._id}>
            <div className="card-top">
              {/* <ThumbnailImg url={data.thumbnails[0]} /> */}
              <img src={data.thumbnails[0]} alt={data.videos[0]} />
            </div>
            <div className="card-bottom">
              <h6>{data.collectionTitle}</h6>
            </div>
          </DivCard>
        ))}
      </StyleSlider>
    </section>
  );
};
// todo https://www.cluemediator.com/add-space-between-carousel-items-in-react-slick 리액트슬릭 마진 추가..
export default FamousCollections;
const StyleSlider = styled(Slider)`
  /* 아이템 사이의 간격 조절 */
  & .slick-slide > div {
    margin: 0 0.5rem;
  }
  & .slick-list {
    margin: 0 -0.5rem;
  }
`;
const DivCard = styled.div`
  border: 1px solid black;
  & .card-top {
    background-color: white;
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
const CollectionFolder = styled.div`
  border: 2px solid blue;
  flex-shrink: 0;
  width: 130px;
  text-align: center;
`;
const ThumbnailImg = styled.div`
  width: 100%;
  max-width: 320px;
  min-height: 90px;
  max-height: 180px;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const CollectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;
