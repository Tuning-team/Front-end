import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/modules/collectionSlice";
import styled from "styled-components";

const CategoryModal = ({ setIsCategoryShown }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.myCollectionSlice.category.data
  );
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  // todo 지금은 모달을 열때마다 요청을 보내는데, 한번만 요청을 보내고 그 후부터는 안가게 하기...
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
            {categories?.map((elem) => {
              return (
                <Li
                  key={elem._id}
                  onClick={() => nav(`/category/${elem._id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {elem.categoryName}
                </Li>
              );
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
