import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Modal from "../../../common/Modal";
import {
  postUserInterest,
  deleteUserInterest,
  getUserInterest,
} from "../../../../redux/modules/userSlice";
import ToastNotification from "../../../common/ToastNotification";

const SetUserInterestForm = ({ setModal, modal, categories }) => {
  const dispatch = useDispatch();

  const [toastState, setToastState] = useState(false);
  const [toastText, setToastText] = useState("");
  const [interests, setInterests] = useState([]);

  //! 유저가 담는 관심사(~ing)
  const onChecked = (e) => {
    if (e.target.checked) {
      setInterests([...interests, e.target.value]);
    } else if (!e.target.checked) {
      setInterests(interests.filter((elem) => elem !== e.target.value));
    }
  };

  // ! 유저가 담은 관심사(past)
  const userCategory = useSelector(
    (state) => state.userSlice.userInterest.data.categories
  );

  //! 관심사 선택 전송
  const onSubmit = () => {
    if (interests.length > 0 && interests.length <= 4) {
      dispatch(postUserInterest(interests.join(",")));
      setToastState(true);
      setToastText("새 관심사가 저장되었습니다");
      setTimeout(() => {
        setModal(false);
      }, 1000);
    } else {
      setToastState(true);
    }
  };
  const deleteFromUserInterest = (categoryId) => {
    dispatch(deleteUserInterest(categoryId));
    console.log(categoryId);
  };

  useEffect(() => {
    dispatch(getUserInterest());
  }, [dispatch]);
  return (
    <>
      <Modal
        setModal={setModal}
        modal={modal}
        modalKeyword="키워드 설정"
        margin="1.25rem 0 0.25rem 0"
        width="calc(100% - 3rem)"
      >
        <ModalContents>
          <SectionTitle>
            기존 관심 카테고리
            <span> {userCategory.length}</span>
          </SectionTitle>
          <PickedCategories>
            {userCategory?.map((item) => (
              <p
                key={item._id}
                onClick={() => deleteFromUserInterest(item._id)}
              >
                {item.categoryName}
              </p>
            ))}
          </PickedCategories>
          <SectionTitle>
            새 관심 카테고리
            <span>
              {" "}
              ({interests.length}/{categories.length})
            </span>
          </SectionTitle>
          <SectionCategories>
            {categories?.map((elem) => {
              return (
                <Label key={elem._id} value={elem._id}>
                  <input
                    type="checkbox"
                    onChange={onChecked}
                    value={elem._id}
                    name={elem.categoryName}
                  />
                  {elem.categoryName}
                </Label>
              );
            })}
          </SectionCategories>
          <SaveBtn onClick={onSubmit}>저장</SaveBtn>
        </ModalContents>
      </Modal>
      {toastState && (
        <ToastNotification setToastState={setToastState} bottom={"3rem"}>
          {toastText || "관심사는 4개 이하로 선택해주세요"}
        </ToastNotification>
      )}
    </>
  );
};
export default SetUserInterestForm;
const Label = styled.label`
  & input {
    appearance: auto;
    accent-color: #572cff;
    margin-right: 5px;
  }
`;
const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 50vh;
`;
const SectionTitle = styled.h1`
  margin: 0 0 0.25rem 0;
  font-size: 1.125rem;
  font-weight: bold;
  letter-spacing: -0.9px;
  & span {
    font-size: 0.875rem;
    font-weight: normal;
    color: #adadad;
  }
`;
const PickedCategories = styled.div`
  border-radius: 12px;
  background-color: #f6f6f6;
  min-height: 3rem;
  width: 100%;

  padding: 0.625rem 1rem 0 0.5rem;
  margin-bottom: 1rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.25rem;
  & p {
    margin: 0;
    min-width: 2.5rem;
    border-radius: 14px;
    background-color: white;
    font-size: 0.8rem;
    font-weight: bold;
    height: 1.75rem;
    padding: 0.25rem 0.5rem;
  }
`;
const SectionCategories = styled.div`
  width: 100%;
  text-align: left;
  & label {
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
    display: block;
    height: 2.5rem;
    border-radius: 8px;
    background-color: #f5f5f5;
    font-size: 0.875rem;
    font-weight: bold;
    letter-spacing: -0.7px;
    line-height: 2.5rem;
  }
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const SaveBtn = styled.button`
  width: 4.5rem;
  height: 2.5rem;
  padding: 0.531rem 1.313rem;
  border-radius: 20px;
  border: none;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.23);
  background-color: #572cff;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 1.25rem auto 0 auto;
`;
