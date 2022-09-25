import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import throttle from "lodash/throttle";
import MyVideo from "./MyVideo";
import icon_like_black from "../../../shared/svg/icon_like_black.svg";
import icon_comment from "../../../shared/svg/icon_comment.svg";
import icon_next_white from "../../../shared/svg/icon_next_white.svg";
import NoData from "../../common/NoData";

const MyCollections = ({ state, setCount, title }) => {
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
        {title} Tuning <Num>{state?.length}</Num>
      </VideoInfo>
      {state?.length === 0 && <NoData />}
      {state?.map((data, idx) => {
        return (
          <Collection key={idx}>
            <div onClick={() => nav(`/collection/${data._id}`)}>
              <ClickBox>
                <IconNext src={icon_next_white} alt="icon"></IconNext>
                <VideoNum>{data.thumbnails.length}</VideoNum>
              </ClickBox>
              <MyVideo
                src={data.thumbnails[0]}
                videoNum={data.thumbnails.length}
              />
            </div>
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
    </ListWrap>
  );
};
export default MyCollections;

const ListWrap = styled.div`
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23rem;
`;
const VideoInfo = styled.div`
  display: flex;
  margin: 1.25rem 0 1.25rem 0;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: left;
  width: 100%;
`;
const Num = styled.span`
  font-size: 0.875rem;
  text-align: left;
  color: var(--color-disabled);
  margin-left: 0.5rem;
`;

const Collection = styled.section`
  position: relative;
  display: flex;
  width: 20.938rem;
  height: 7.375rem;
  background-color: #ffffff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: var(--box-shadow);
`;

const InfoWrap = styled.div`
  height: 5rem;
  width: 8rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0.3rem 0 0 0.5rem;
  flex-direction: column;
  justify-content: space-between;
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
  padding: 5px;
  width: 0.8rem;
  height: 0.8rem;
`;
const IconNum = styled.span`
  margin-top: 6px;
`;
const ClickBox = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 3.313rem;
  height: 6.125rem;
  left: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
