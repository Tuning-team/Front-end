import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategoryModal = ({ setIsCategoryShown }) => {
  const nav = useNavigate();
  const mockData = [
    { id: 0, title: "맘마" },
    { id: 1, title: "맛도리" },
    { id: 2, title: "할로" },
    { id: 3, title: "멈머" },
    { id: 4, title: "미야옹" },
    { id: 5, title: "여행" },
    { id: 6, title: "어려워" },
    { id: 7, title: "엉엉" },
  ];
  useEffect(() => {}, []);
  return (
    <>
      <ModalFloater setIsCategoryShown="setIsCategoryShown">
        <div style={{ margin: "1rem" }}>
          <h1
            style={{ color: "white", fontSize: "2rem", marginBottom: "1rem" }}
          >
            카테고리
          </h1>
          <ul>
            {mockData?.map((category) => {
              return <Li key={category.id}>{category.title}</Li>;
            })}
          </ul>
        </div>
      </ModalFloater>
      <Div onClick={(prev) => setIsCategoryShown(!prev)}></Div>
    </>
  );
};
export default CategoryModal;
const Div = styled.div`
  width: 100%;
  z-index: 9;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`;
const ModalFloater = styled.div`
  /* position: fixed; */
  position: absolute;

  left: -100%;
  top: 0;
  bottom: 0;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.9); //검은색 배경, 투명도 90%
  width: 70%;

  left: ${(props) => (props.setIsCategoryShown ? "0" : "-100%")};
  transition: 1s;
`;
const Li = styled.li`
  color: white;
  margin: 1rem auto;
`;
