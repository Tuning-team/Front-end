import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import throttle from "lodash/throttle";
import MyVideo from "./MyVideo";
import icon_like from "../../../shared/svg/icon_like.svg";
import icon_comment from "../../../shared/svg/icon_comment.svg";
import icon_next from "../../../shared/svg/icon_next.svg";

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
    <>
      <ListWrap>
        <div>
          {title} Tuning <span>{state?.length}</span>
        </div>

        {state?.map((data, idx) => {
          return (
            <Collection key={idx}>
              <div onClick={() => nav(`/collection/${data._id}`)}>
                <ClickBox>
                  <IconNext src={icon_next} alt="icon"></IconNext>
                  <VideoNum>{data.thumbnails.length}</VideoNum>
                </ClickBox>
                <MyVideo
                  src={data.thumbnails[0]}
                  videoNum={data.thumbnails.length}
                />
              </div>
              <InfoWrap onClick={() => nav(`/collection/${data._id}`)}>
                <div>
                  <CollectionTitle>{data.collectionTitle}</CollectionTitle>
                  <CollectionDescription>
                    {data.description}
                  </CollectionDescription>
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
export default MyCollections;

const Collection = styled.section`
  display: flex;
`;

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
const ClickBox = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 4rem;
  height: 6.8rem;
  left: 36vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IconNext = styled.img`
  width: 2rem;
`;
const VideoNum = styled.span`
  color: white;
  padding-top: 10px;
`;
const CollectionDescription = styled.span`
  width: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
