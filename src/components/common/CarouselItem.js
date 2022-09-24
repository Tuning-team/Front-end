import React from "react";
import styled from "styled-components";

const CarouselItem = (props) => {
  return (
    <DivCard
      className="card"
      key={props.key}
      onClick={props.onClick}
      maxwidth={props.maxwidth}
    >
      <div className="card-top">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="card-bottom">
        <h6>{props.title || props.children}</h6>
      </div>
    </DivCard>
  );
};
export default CarouselItem;

const DivCard = styled.div`
  max-width: ${(props) => props.maxwidth || "320px"};
  &:hover {
    cursor: pointer;
  }

  & .card-top > img {
    width: 100%;
    border-radius: 6px;
  }
  & .card-bottom > h6 {
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.35px;

    margin: 0.5rem 0 0 0.219rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 표시하고자 하는 라인 수 */
    -webkit-box-orient: vertical;
  }
`;
