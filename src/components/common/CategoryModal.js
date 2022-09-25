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
      <ContentsWrap style={{ margin: "1rem" }}>
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
      </ContentsWrap>
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
  background-color: white !important;
  width: 100%;
  // height: 100%;
  left: ${(props) => (props.setIsCategoryShown ? "0" : "-100%")};

  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${slideIn};
  animation-fill-mode: forwards;
  /*테스트*/
  height: 100%;
  overflow: scroll;
  position: fixed;
  top: 0;
  transition: visibility 300ms, left 300ms ease-in;
  width: calc(100% -3px);
  will-change: left;
  z-index: 1002;
`;
const ContentsWrap = styled.div`
  width: 22rem;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
`;

const Title = styled.h1`
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 0.75;
  letter-spacing: -1.2px;
  text-align: left;
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const Li = styled.li`
  margin: 1rem auto;
  font-size: 1.125rem;
  font-weight: bold;
  letter-spacing: -0.9px;
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
  &:active {
    background-color: white;
    opacity: 1;
    font-weight: 900;
  }
`;
