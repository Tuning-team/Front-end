import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import throttle from "lodash/throttle";
import MyVideo from "../myCollection/MyVideo";
import icon_like_black from "../../../shared/svg/16_ena_like.svg";
import icon_comment from "../../../shared/svg/16_ena_comment.svg";
import icon_next_white from "../../../shared/svg/icon_next_white.svg";
import NoData from "../../common/NoData";
import MyCollectionsLoading from "./Skeleton";

const MyCollections = ({ state, setCount, title, hasNext, totalContents }) => {
  const nav = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  const useHandleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setCount((prev) => prev + 5);
    }
  };
  const infiniteScroll = throttle(useHandleScroll, 2000);
  return (
    <ListWrap>
      <VideoInfo>
        {title} Tuning <Num>{totalContents}</Num>
      </VideoInfo>
      {state?.length === 0 && <NoData title={title} />}
      {state?.map((data, idx) => {
        return (
          <Collection key={idx}>
            <ImgWrap onClick={() => nav(`/collection/${data._id}`)}>
              {/* <ClickBox>
                <IconNext src={icon_next_white} alt="icon"></IconNext>
                {/* <VideoNum>{videoNum}</VideoNum> */}
              {/* </ClickBox> */}
              <MyVideo
                src={data.thumbnails[0]}
                videoNum={data?.thumbnails.length}
              />
            </ImgWrap>
            <InfoWrap onClick={() => nav(`/collection/${data._id}`)}>
              <InfoText>
                <CollectionTitle>{data.collectionTitle}</CollectionTitle>
                <CollectionDescription>
                  {data.description}
                </CollectionDescription>
              </InfoText>
              <IconWrap>
                <IconLayout>
                  <Icon src={icon_like_black} />
                  <IconNum>{data.likes}</IconNum>
                </IconLayout>
                <IconLayout>
                  <Icon src={icon_comment} />
                  <IconNum>{data.commentNum}</IconNum>
                </IconLayout>
              </IconWrap>
            </InfoWrap>
          </Collection>
        );
      })}
      {hasNext && state?.length !== 0 && <MyCollectionsLoading />}
    </ListWrap>
  );
};
export default MyCollections;

const ListWrap = styled.div`
  width: 100%;

  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1rem 7rem 1rem;

  overflow-x: hidden;
`;
const VideoInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 1.25rem 0 1.25rem 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  text-align: left;
  border-bottom: solid 1px #ffffff;
`;
const Num = styled.span`
  font-size: 0.875rem;
  text-align: left;
  color: var(--color-disabled);
  margin-left: 0.5rem;
`;

const Collection = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 50%;
  position: relative;
  display: flex;
  padding-top: 56.25%;

  background-color: #ffffff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: var(--box-shadow);
  padding: 1rem;
`;
const ImgWrap = styled.div`
  width: 11rem;
  height: 6.125rem;
  position: relative;
`;
const InfoWrap = styled.div`
  margin: 0 1rem 0 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  // margin: 0.3rem 0 0 0.5rem;
  flex-direction: column;
  justify-content: space-between;
  max-width: 13rem;
  overflow: hidden;
`;
const InfoText = styled.div`
  width: 100%;
`;
const CollectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: bold;
  letter-spacing: -0.7px;
  text-align: left;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const CollectionDescription = styled.div`
  font-size: 0.625rem;
  letter-spacing: -0.25px;
  text-align: left;
  color: var(--color-disabled);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const IconWrap = styled.div`
  display: flex;
  margin-right: 1.5rem;
  margin-top: 1rem;
`;
const IconLayout = styled.div`
  display: flex;
  align-items: center;
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
  width: 0.8rem;
  height: 0.8rem;
`;
const IconNum = styled.span`
  margin: 0px 6px 0px 6px;
`;
const ClickBox = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 21%;
  height: 100%;
  left: 79%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 300;
`;
const IconNext = styled.img`
  width: 3rem;
  height: 1.5rem;
`;
const VideoNum = styled.span`
  color: #ffffff;
  font-size: 0.75rem;
  padding-top: 5px;
`;
