import React, { useState } from "react";
import styled from "styled-components";
import ChildrenCategories from "./ChildrenCategories";
import SearchInput from "../../common/SearchInput";
import InterestedCategories from "./InterestedCategories";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainCategories } from "../../../redux/modules/categorySlice";
import { useNavigate } from "react-router-dom";
import Loading from "../../common/Loading";

const MainListWrap = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const { data, loading } = useSelector(
    (state) => state.categorySlice.mainCategories
  );

  const weather = data[0]?.res1;
  const recommend = data[1]?.res2;
  const popular = data[2]?.res3;
  const recent = data[3]?.res4;

  useEffect(() => {
    dispatch(
      getMainCategories({
        category_ids: [
          "631e7d7a4ae4c133c405a965",
          "631e7d7a4ae4c133c405a966",
          "6319aeebd1e330e86bbade9f",
          "631e7d7a4ae4c133c405a964",
        ],
      })
    );
  }, []);
  const [centerPadding, setCenterPadding] = useState("50px");
  useEffect(() => {
    const clientWidth = document.documentElement.clientWidth;
    if (clientWidth > 423) {
      setCenterPadding("80px");
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ position: "relative" }}>
          <Carousel
            slidesToShow={1}
            centerMode={true}
            infinite={true}
            speed={500}
            centerPadding={centerPadding}
            autoPlay={true}
            className={"center"}
            height={"15.625rem"}
          >
            {popular?.collections.map((collection) => (
              <CarouselItem
                key={collection._id}
                src={collection.thumbnails[0]}
                alt={collection._id}
                onClick={() => nav(`/collection/${collection._id}`)}
              />
            ))}
          </Carousel>
          <CarouselDesc>
            <TextContainer>
              <h1>인기있는 튜닝</h1>
              <p>가장 많은 좋아요와 댓글을 획득한 튜닝들</p>
            </TextContainer>
          </CarouselDesc>
        </div>
      )}
      <StyleBackground>
        <SearchInput
          backgroundColor={"#ffffff"}
          onClick={() => nav("/search")}
        />
        <InterestedCategories />
      </StyleBackground>
      <ChildrenCategories recommend={recommend} recent={recent} />
    </>
  );
};

export default MainListWrap;

const CarouselDesc = styled.div`
  position: absolute;
  pointer-events: none;
  top: 50%;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.13) 8%,
    rgba(0, 0, 0, 0.54) 37%,
    rgba(0, 0, 0, 0.8) 70%,
    #000
  );
`;
const TextContainer = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 1.25rem;
  left: 1.25rem;
  & h1 {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: normal;
    color: #fff;
  }
  & p {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: normal;
    color: #adadad;
  }
`;

const StyleBackground = styled.div`
  background-color: #eeeef6;
  padding: 1.25rem 1.5rem 2.5rem 1.5rem;
`;
