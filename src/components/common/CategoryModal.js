import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/modules/categorySlice";
import styled from "styled-components";
import { keyframes } from "styled-components";
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
  position: absolute;
  top: 0;

  z-index: 200;

  background-color: white;
  width: 100%;

  left: ${(props) => (props.setIsCategoryShown ? "0" : "-100%")};

  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${slideIn};
  animation-fill-mode: forwards;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
`;

const Title = styled.h1`
  color: #7951c6;
  font-size: 24px;
  margin-bottom: 1rem;
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
