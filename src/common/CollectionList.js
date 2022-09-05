import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollectionSlide from "../elements/CollectionSlide";
import { useEffect, useState } from "react";
import VideoList from "../components/mainList/VideoList";
import { useDispatch, useSelector } from "react-redux";
import { getThumbnail } from "../redux/modules/collectionSlice";

const CollectionList = ({ state }) => {
  const img = useSelector((state) => state.myCollectionSlice.thumbnails);
  const dispatch = useDispatch();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
  };

  const [thumb, setThumb] = useState(null);

  useEffect(() => {
    dispatch(getThumbnail("PZIPsKgWJiw"));
    // console.log(state[0]?.videos); //data.videos --> 배열
    // dispatch(getThumbnail(state[0]?.videos[0]));
    // dispatch(getThumbnail(state[0]?.videos[1]));
    // dispatch(getThumbnail(state[0]?.videos[2]));
    // console.log(state[1]?.videos);
    // console.log(state[2]?.videos);
    // console.log(state[3]?.videos);
  }, []);

  return (
    <>
      <ListWrap>
        {state?.map((data, idx) => {
          return (
            <Collection key={data._id}>
              <SlideWrap>
                <Slider {...settings}>
                  {data.videos?.map((src, i) => {
                    return (
                      <VideoList
                        key={data._id}
                        img={data.thumbnail}
                      ></VideoList>
                    );
                  })}
                </Slider>
                <a>더보기...</a>
              </SlideWrap>

              <h3>{data.collectionTitle}</h3>
              <div>
                <span>좋아요 {data.likes} /</span>
                <span>댓글 {data.commentNum}</span>
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
