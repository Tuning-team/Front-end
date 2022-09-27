import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Modal from "../../common/Modal";
import { postUserInterest } from "../../../redux/modules/userSlice";
import ToastNotification from "../../common/ToastNotification";

const SetUserInterestForm = ({ setModal, modal, categories }) => {
  const dispatch = useDispatch();

  //! 유저가 담은 관심사
  const [interests, setInterests] = useState([]);
  const onChecked = (e) => {
    if (e.target.checked) {
      setInterests([...interests, e.target.value]);
    } else if (!e.target.checked) {
      setInterests(interests.filter((elem) => elem !== e.target.value));
    }
  };
  const [toastState, setToastState] = useState(false);

  //! 관심사 선택
  const onSubmit = () => {
    if (interests.length > 0 && interests.length <= 4) {
      dispatch(postUserInterest(interests.join(",")));
      setModal((prev) => !prev);
    } else {
      setToastState(true);
    }
  };
  return (
    <>
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
      {toastState ? (
        <ToastNotification setToastState={setToastState} bottom={"3rem"}>
          관심사는 1개 또는 4개 이하만 <br />
          선택 할 수 있습니다
        </ToastNotification>
      ) : null}
    </>
  );
};
export default SetUserInterestForm;
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
