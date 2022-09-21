import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/modules/categorySlice";
import styled from "styled-components";
import { css, keyframes } from "styled-components";
import icon_close from "../../shared/svg/icon_close.svg";

const CategoryModal = ({ setIsCategoryShown }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categorySlice.category.data);
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategory());
    }
  }, []);

  return (
    <>
      <ModalFloater setIsCategoryShown="setIsCategoryShown">
        <div style={{ margin: "1rem" }}>
          <TitleWrap>
            <Title>카테고리</Title>
            <Icon
              onClick={() => setIsCategoryShown((prev) => !prev)}
              src={icon_close}
            ></Icon>
          </TitleWrap>

          <ul>
            {categories?.map((elem) => {
              return (
                <Li
                  key={elem._id}
                  onClick={() => {
                    nav(`/category/${elem._id}`);
                    setIsCategoryShown((prev) => !prev);
                  }}
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

const slideIn = keyframes`
from{
  transform: translateX(-150px)
}
to{
  transform: translateX(0px)
}
`;

const ModalFloater = styled.div`
  display: flex;
  position: fixed;
  overflow: scroll;
  left: -50vh;
  right: 50vh;
  z-index: 10;
  margin-bottom: 4.5rem;
  background-color: rgba(245, 245, 245, 0.96);
  width: 50vh;

  left: ${(props) => (props.setIsCategoryShown ? "0" : "-100%")};
  transition: 1s;

  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${slideIn};
  animation-fill-mode: forwards;
`;

const Div = styled.div`
  width: 50vh;
  z-index: 9;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const Li = styled.li`
  margin: 1rem auto;
  font-size: 14px;
  padding: 0.5rem;
  cursor: pointer;
  &:active {
    background-color: white;
    opacity: 1;
    font-weight: 900;
  }
`;
const Title = styled.h1`
  color: #7951c6;
  font-size: 24px;
  margin-bottom: 1rem;
`;
