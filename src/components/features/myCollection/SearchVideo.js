import React, { useState } from "react";
import useInputs from "../../hooks/useInput";
import { getVideo } from "../../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Icon_search from "../../../shared/icon/24_ena_search.svg";
import ToastNotification from "../../common/ToastNotification";

const SearchVideo = () => {
  const dispatch = useDispatch();
  const [toastState, setToastState] = useState(false);
  const [{ keyword }, onChange, reset] = useInputs({
    keyword: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword === "") {
      setToastState(true);
      return;
    }
    const token = null;
    const key = null;
    dispatch(getVideo({ keyword, token, key }));
    localStorage.setItem("keyword", keyword);
    reset();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <StInput
        backgroundColor={"#EEEEF6"}
        onChange={onChange}
        name="keyword"
        value={keyword}
        type="text"
        placeholder="찾고싶은 영상을 검색해보세요."
      />
      <StBtn type="submit">
        <StBtnImg src={Icon_search} />
      </StBtn>
      {toastState && (
        <ToastNotification setToastState={setToastState}>
          검색어를 입력해주세요
        </ToastNotification>
      )}
    </Form>
  );
};
export default SearchVideo;

const Form = styled.form`
  padding: 1.125rem 1.5rem 2.1rem 1.5rem;
  position: relative;
  width: auto;
`;

const StInput = styled.input`
  background-color: #eeeef6;
  padding: 0.375rem 1rem;
  border-radius: 18px;
  width: 100%;
  height: 2.25rem;
  box-sizing: border-box;
  border: none;
  font-size: 1rem;
  font-weight: normal;
  &::placeholder {
    color: #adadad;
  }
`;

const StBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 2.5rem;
  top: 37px;
  transform: translate(0, -50%);
`;
const StBtnImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
