import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import throttle from "lodash/throttle";
import MyVideo from "./MyVideo";
import icon_like from "../../../shared/svg/icon_like.svg";
import icon_comment from "../../../shared/svg/icon_comment.svg";

const MyCollections = ({ state, setCount }) => {
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
        {state?.map((data, idx) => {
          return (
            <Collection key={idx}>
              <div onClick={() => nav(`/collection/${data._id}`)}>
                <MyVideo
                  src={data.thumbnails[0]}
                  videoNum={data.thumbnails.length}
                />
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
