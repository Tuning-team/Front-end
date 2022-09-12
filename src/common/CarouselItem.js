import React from "react";
import styled from "styled-components";

const CarouselItem = (props) => {
  // props로 꼭 넘겨야 되는 속성
  // key, img를 위한 src
  return (
    <DivCard className="card" key={props.key} onClick={props.onClick}>
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
  border: 1px solid black;
  max-width: 320px;
  &:hover {
    cursor: pointer;
  }
  & .card-top {
    /* background-color: white; */
  }
  & .card-top > img {
    max-width: 320px;
    max-height: 180px;
    width: 100%;
    border-radius: 3px;
  }
`;
