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

const InterestedCategories = () => {
  const nav = useNavigate();

  const dispatch = useDispatch();
  // 로그인 여부 판단
  const isLoggedIn = getCookie("token");

  // 유저 정보
  const data = useSelector((state) => state.userSlice.userInterest.data);

  // 모달 열었을떄 카테고리 정보
  const categoriesArr = useSelector(
    (state) => state.categorySlice.category.data
  );
  const [categories, setCategories] = useState();

  // 유저가 담은 관심사
  const [interests, setInterests] = useState([]);
  const onChecked = (e) => {
    if (e.target.checked) {
      setInterests([...interests, e.target.value]);
    } else if (!e.target.checked) {
      setInterests(interests.filter((elem) => elem !== e.target.value));
    }
  };
  console.log(interests);
  const onSubmit = () => {
    if (interests.length === 4) {
      dispatch(postUserInterest(interests.join(",")));
    } else {
      alert("관심사 4개를 선택해주세요");
    }
  };

  useEffect(() => {
    dispatch(getCategory());
    if (isLoggedIn) {
      dispatch(getUserInterest());
    }
  }, []);

  // 모달 여닫는 로직
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal((prev) => !prev);
    setCategories(categoriesArr);
  };

  // 로컬에 있는 카테고리리스트에서 유저가 가지고 있는 관심사 카테고리id가 일치하는 내역만 뽑아낸 배열
  const userInterestArr = categoryList.filter((item) =>
    data.categories?.some((i) => i._id === item._id)
  );

  return (
    <Wrap>
      <Title>
        <h1>추천 카테고리</h1>
        {/* <p>더보기</p> */}
      </Title>
      <BodyContainer>
        {!isLoggedIn ? (
          <div>로그인이 필요한 기능입니다.</div>
        ) : userInterestArr.length === 0 ? (
          <div>
            아직 관심사 설정을 하지 않았습니다.
            <button onClick={showModal}>설정하러가기</button>
          </div>
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
      <Modal setModal={setModal} modal={modal}>
        <ModalContents>
          <h1>관심사 설정하기</h1>
          <p>선택된 관심사 {interests.length}개</p>
          <div>
            {categories?.map((elem) => {
              return (
                <label key={elem._id}>
                  <input
                    type="checkbox"
                    onChange={onChecked}
                    value={elem._id}
                  />
                  {elem.categoryName}
                </label>
              );
            })}
          </div>
          <button onClick={onSubmit}>확인</button>
        </ModalContents>
      </Modal>
    </Wrap>
  );
};
export default InterestedCategories;

const Wrap = styled.div`
  border: 1px solid black;
  border-radius: 25px;
  padding-left: 1rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BodyContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 10px;
`;
const CategoryCard = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  width: 10rem;
  height: 6rem;

  & h6 {
    margin: 0;
  }
`;
const Img = styled.div`
  border-radius: 50%;
  border: 1px solid red;
  width: 3rem;
  height: 3rem;
  background-image: url(${(props) => props.url});
  background-position: center;
`;
const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-height: 50vh;
  & h1 {
    margin-top: 0;
  }
  & label {
    margin: 0.5rem 0;
    display: block;
  }
  & > div {
    overflow-y: scroll;
    width: 100%;
    text-align: left;
  }
`;
