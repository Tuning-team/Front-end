import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollectionSlide from "../elements/CollectionSlide";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import throttle from "lodash/throttle";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import icon_like from "../svg/icon_like.svg";
import icon_comment from "../svg/icon_comment.svg";

// import useHandleScroll from "../hooks/useHandscroll";

const CollectionList = ({ state, setCount }) => {
  const nav = useNavigate();

  const useHandleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    // console.log("스크롤 이벤트 발생");
    if (scrollTop + clientHeight >= scrollHeight) {
      // console.log("페이지 끝에 스크롤이 닫았음. ");
      setCount((prev) => prev + 5);
    }
  };
  const infiniteScroll = throttle(useHandleScroll, 2000);

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  return (
    <>
      <ListWrap>
        {state?.map((data, idx) => {
          return (
            <Collection key={idx}>
              <Carousel>
                {" "}
                {data.thumbnails?.map((src, i) => {
                  return <CarouselItem key={data._id} src={src}></CarouselItem>;
                })}
                <a>더보기...</a>
              </Carousel>

              <InfoWrap onClick={() => nav(`/collection/${data._id}`)}>
                <div>
                  <CollectionTitle>{data.collectionTitle}</CollectionTitle>
                  <div>
                    <CollectionInfo>좋아요 {data.likes} /</CollectionInfo>
                    <CollectionInfo> 댓글 {data.commentNum}</CollectionInfo>
                  </div>
                </div>

                <IconWrap>
                  <IconLayout>
                    <Icon src={icon_like} />
                    <span>{data.likes}</span>
                  </IconLayout>
                  <IconLayout>
                    <Icon src={icon_comment} />
                    <span>{data.commentNum}</span>
                  </IconLayout>
                </IconWrap>
              </InfoWrap>
            </Collection>
          );
        })}
      </ListWrap>
    </>
  );
};
export default CollectionList;

const Collection = styled.section`
  background-color: white;
`;

const ListWrap = styled.div`
  background-color: yellow;
`;
const CollectionTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 123.8%;
`;
const InfoWrap = styled.div`
  height: 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;
`;
const CollectionInfo = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 123.8%;
`;
const IconWrap = styled.div`
  display: flex;
`;
const Icon = styled.img`
  padding: 5px;
  width: 15px;
  height: 15px;
`;
const IconLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
