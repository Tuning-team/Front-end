import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../common/Modal";
import { getCategory } from "../../../redux/modules/categorySlice";
import {
  postUserInterest,
  deleteUserInterest,
} from "../../../redux/modules/userSlice";

const RecommendedCategory = () => {
  const dispatch = useDispatch();

  const { data, error } = useSelector((state) => state.userSlice.userInterest);
  console.log(data);
  const categoriesArr = useSelector(
    (state) => state.categorySlice.category.data
  );

  const [categories, setCategories] = useState();
  // 모달을 위한 useState와 eventHandler
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal((prev) => !prev);
    setCategories(categoriesArr);
  };
  const [interests, setInterests] = useState([]);
  const onChecked = (e) => {
    if (e.target.checked) {
      // setInterests([...interests, e.target.value]);
      dispatch(postUserInterest(e.target.value));
    } else if (!e.target.checked) {
      // setInterests(interests.filter((elem) => elem !== e.target.value));
      dispatch(deleteUserInterest(e.target.value));
    }
  };

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  // console.log(modal, interests);
  return (
    <Wrap>
      <CardTop>
        <h1>추천 카테고리</h1>
        <p>더보기</p>
      </CardTop>
      <CardBottom>
        {error ? (
          <p>{error}</p>
        ) : !data.category_ids?.length ? (
          <>
            <p>설정된 관심사가 없습니다.</p>
            <button onClick={showModal}>관심사 설정하기</button>
            <Modal setModal={setModal} modal={modal}>
              <Contents>
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
                <button>확인</button>
              </Contents>
            </Modal>
          </>
        ) : (
          <>
            {data?.category_names.map((elem) => (
              <div key={elem}>{elem}</div>
            ))}
          </>
        )}
      </CardBottom>
    </Wrap>
  );
};
export default RecommendedCategory;

const Wrap = styled.div`
  border: 1px solid black;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
`;

const CardBottom = styled.div`
  border: 1px solid orange;
`;

const Contents = styled.div`
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
