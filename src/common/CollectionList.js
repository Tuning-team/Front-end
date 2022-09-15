import React from "react";
import styled from "styled-components";
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
              <div onClick={() => nav(`/collection/${data._id}`)}>
                <Carousel>
                  {data.thumbnails?.map((src, i) => {
                    return (
                      <CarouselItem key={data._id} src={src}></CarouselItem>
                    );
                  })}
                </Carousel>
              </div>
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

const Collection = styled.section``;

const ListWrap = styled.div``;
const CollectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: normal;
`;
const InfoWrap = styled.div`
  height: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.5rem;
`;
const CollectionInfo = styled.span`
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: normal;
`;
const IconWrap = styled.div`
  display: flex;
  margin-right: 1.5rem;
`;
const IconLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* margin-right: 0.8rem; */
  & span {
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: normal;
  }
`;
const Icon = styled.img`
  padding: 5px;
  width: 15px;
  height: 15px;
`;
