import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../shared/cookie";
import { getCategory } from "../../../redux/modules/categorySlice";
import {
  postUserInterest,
  deleteUserInterest,
  getUserInterest,
} from "../../../redux/modules/userSlice";
import Modal from "../../common/Modal";
import { categoryList } from "./categoryData";
import SetUserInterestForm from "../myCollection/SetUserInterestForm";
import SeeMore from "../../common/elements/SeeMore";

const InterestedCategories = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  //! 로그인 여부 판단
  const isLoggedIn = getCookie("token");

  //! 유저 정보
  const data = useSelector((state) => state.userSlice.userInterest.data);

  //! 모달 열었을떄 카테고리 정보
  const categoriesArr = useSelector(
    (state) => state.categorySlice.category.data
  );
  const [categories, setCategories] = useState();

  useEffect(() => {
    dispatch(getCategory());
    if (isLoggedIn) {
      dispatch(getUserInterest());
    }
  }, []);

  //! 모달 여닫는 로직
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal((prev) => !prev);
    setCategories(categoriesArr);
  };

  //! 로컬에 있는 카테고리리스트에서 유저가 가지고 있는 관심사 카테고리id가 일치하는 내역만 뽑아낸 배열
  const userInterestArr = categoryList.filter((item) =>
    data.categories?.some((i) => i._id === item._id)
  );

  //! 관심사 삭제버튼
  const deleteInterest = () => {
    userInterestArr.map((elem) => {
      dispatch(deleteUserInterest(elem._id));
    });
  };

  return (
    <Wrap>
      <Title>
        <h1>관심있는 카테고리</h1>
        {/* <SeeMore>더보기</SeeMore> */}
      </Title>
      <BodyContainer>
        {!isLoggedIn ? (
          <TextContent>로그인이 필요한 기능입니다.</TextContent>
        ) : userInterestArr.length === 0 ? (
          <TextContent>
            아직 관심사 설정을 하지 않았습니다.
            <span onClick={() => nav("myPage")}>설정하러가기</span>
          </TextContent>
        ) : (
          <>
            {userInterestArr?.map((elem) => (
              <CategoryCard key={elem._id}>
                <Img url={elem.img}></Img>
                <h6>{elem.name}</h6>
                <button onClick={() => nav(`/category/${elem._id}`)}>
                  바로가기
                </button>
              </CategoryCard>
            ))}
          </>
        )}
      </BodyContainer>
      {/* <button onClick={deleteInterest}>임시 관심사 삭제</button> */}
      {modal && (
        <SetUserInterestForm
          setModal={setModal}
          modal={modal}
          categories={categories}
        />
      )}
    </Wrap>
  );
};
export default InterestedCategories;

const Wrap = styled.div`
  /* width: 20.938rem; */
  /* height: 25.875rem; */
  margin-top: 2.5rem;
  padding: 0.75rem 1rem;
  border-radius: 15px;
  box-shadow: 5px 5px 15px 0 rgba(24, 32, 74, 0.1);
  background-color: #fff;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 0.938rem;
  height: 2.188rem;
  & h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: -1.2px;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 0.813rem;
  & > div {
    min-height: 10.25rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  & span {
    color: #707070;
    border-bottom: 1px solid #707070;
    padding-bottom: 3px;
    margin-top: 0.5rem;
  }
`;
const CategoryCard = styled.div`
  width: calc(51.5% - 0.813rem);
  height: 10.25rem;
  padding-top: 1rem;
  text-align: center;
  border-radius: 12px;
  border: solid 1px #eee;
  background-color: #fff;

  &:focus,
  &:active {
    cursor: pointer;
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.08);
  }
  & h6 {
    margin: 0.5rem 0 0.625rem 0;
    font-size: 0.875rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #191919;
  }
  & button {
    width: 5.063rem;
    height: 1.75rem;
    padding: 0.375rem 0.875rem;
    border: none;
    border-radius: 14px;
    background-color: #572cff;
    color: white;
    font-size: 0.813rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: center;
  }
`;
const Img = styled.div`
  display: inline-block;
  border-radius: 100%;
  width: 4.063rem;
  height: 4.063rem;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
`;
