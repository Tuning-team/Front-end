import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/modules/categorySlice";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { ReactComponent as CloseIcon } from "../../shared/svg/24_ena_close.svg";

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
      <TitleWrap>
        <Title>카테고리</Title>
        <StyleCloseIcon onClick={() => setIsCategoryShown((prev) => !prev)} />
      </TitleWrap>

      <List>
        {categories?.map((elem) => {
          return (
            <li
              key={elem._id}
              onClick={() => {
                nav(`/category/${elem._id}`);
                setIsCategoryShown((prev) => !prev);
              }}
            >
              {elem.categoryName}
            </li>
          );
        })}
      </List>
    </ModalFloater>
  );
};
export default CategoryModal;

const slideIn = keyframes`
from{
  transform: translateY(50%);
}
to{
  transform: translateY(0);
}
`;

const ModalFloater = styled.div`
  background-color: white;
  padding: 0 1.25rem;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 500;
  @media screen and (max-width: 479px) {
    width: 100vw;
  }
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  /* 슬라이드 애니메이션 적용 */
  animation-name: ${slideIn};
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const TitleWrap = styled.div`
  position: sticky;
  top: 0;
  padding-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -1.2px;
`;
const StyleCloseIcon = styled(CloseIcon)`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
`;
const List = styled.ul`
  & li {
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: -0.9px;
    padding: 1rem 0;
    border-top: 1px solid #eeeeee;
    cursor: pointer;
    &:active {
      background-color: #eeeeee;
      opacity: 1;
      font-weight: 900;
    }
  }
`;
