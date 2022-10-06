import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import throttle from "lodash/throttle";
import MyVideo from "../myCollection/MyVideo";
import icon_like_black from "../../../shared/icon/16_ena_like.svg";
import icon_comment from "../../../shared/icon/16_ena_comment.svg";
import NoData from "../../common/NoData";
import Skeleton from "../myCollection/Skeleton";

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
    if (setCount && scrollTop + clientHeight >= scrollHeight) {
      setCount((prev) => prev + 5);
    }
  };
  const infiniteScroll = throttle(useHandleScroll, 700);
  return (
    <ListWrap>
      <VideoInfo>
        {title} <Num>{totalContents || state.length}</Num>
      </VideoInfo>
      {state?.length === 0 && <NoData title={title} />}
      {state?.map((data, idx) => {
        return (
          <Collection key={idx}>
            <ImgWrap onClick={() => nav(`/collection/${data._id}`)}>
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
      {hasNext && state?.length !== 0 && <Skeleton />}
    </ListWrap>
  );
};
export default MyCollections;

const ListWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  overflow-x: hidden;
`;
const VideoInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 1.25rem 0;
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
const ImgWrap = styled.div`
  width: 100%;
  max-width: 11rem;
  min-height: 6.125rem;
  position: relative;
`;
const Collection = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  cursor: pointer;
  @media screen and (max-width: 334px) {
    flex-direction: column;
    justify-content: flex-start;
    & ${ImgWrap} {
      width: 100%;
    }
  }
  gap: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: var(--box-shadow);
  padding: 1rem;
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  justify-content: space-between;
  max-width: 13rem;
  overflow: hidden;
`;
const InfoText = styled.div`
  width: 100%;
`;
const CollectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: -0.7px;
  text-align: left;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const CollectionDescription = styled.div`
  font-size: 0.75rem;
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
    line-height: 1.24;
  }
`;
const Icon = styled.img`
  width: 0.8rem;
  height: 0.8rem;
`;
const IconNum = styled.span`
  margin: 0px 6px 0px 6px;
`;
