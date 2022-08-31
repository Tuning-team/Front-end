import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollectionSlide from "../elements/CollectionSlide";
import { useEffect, useState } from "react";
import VideoList from "../components/mainList/VideoList";

const CollectionList = ({ state }) => {
  const [data, setData] = useState(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
  };
  // useEffect(() => {
  //   if (data === null) {
  //     setData([...state]);
  //   }
  // }, []);
  //!렌더링 총두번
  //todo 백그라운드 이미지로 바꿔주기
  //todo 데이터 연결후 해야할것 : pending상태 처리하기, 데이터 안들어올때 어떻게 할건지 useeffect, usecallback,
  return (
    <>
      <ListWrap>
        {state?.map((data, idx) => {
          return (
            <Collection key={idx}>
              <SlideWrap>
                <Slider {...settings}>
                  {data.thumbnail?.map((src, i) => {
                    return (
                      <VideoList key={data.id} img={data.thumbnail}></VideoList>
                    );
                  })}
                </Slider>
                <a>더보기...</a>
              </SlideWrap>

              <h3>{data.collectionTitle}</h3>
              <div>
                <span>좋아요 {data.likes}</span>
                <span>댓글 {data.comments}</span>
              </div>
            </Collection>
          );
        })}
      </ListWrap>
    </>
  );
};
export default CollectionList;

const Collection = styled.section`
  background-color: green;
`;
const SlideWrap = styled.div`
  // overflow: hidden;
  // flex-direction: row;
  // background-color: white;
  position: relative;
  border: 1px solid black;
  margin: 0 auto;
  overflow-x: hidden;
`;

const ListWrap = styled.div`
  background-color: yellow;
`;
