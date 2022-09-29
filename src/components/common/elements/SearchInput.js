import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getList } from "../../../redux/modules/searchSlice";
import Icon_search from "../../../shared/svg/24_ena_search.svg";
import ToastNotification from "../ToastNotification";

const SearchInput = (props) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  // toastState가 true면 보여줌
  const [toastState, setToastState] = useState(false);

  const onSearch = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(getList(search));
      nav("/search");
    } else {
      setToastState(true);
    }
  };

  return (
    <>
      <Form onSubmit={onSearch}>
        <StInput
          onChange={onChangeHandler}
          name="search"
          placeholder="찾고싶은 컬렉션을 검색해보세요"
          backgroundColor={props.backgroundColor}
          // type={props.type || "text"}
          onClick={props.onClick || null}
        />
        <StBtn>
          <StBtnImg src={Icon_search} />
        </StBtn>
      </Form>
      {toastState && (
        <ToastNotification setToastState={setToastState}>
          검색어를 입력해주세요
        </ToastNotification>
      )}
    </>
  );
};
export default SearchInput;
const Form = styled.form`
  position: relative;
  width: auto;
`;

const StInput = styled.input`
  background: ${(props) => props.backgroundColor || "#ffffff"};
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
    font-size: 1rem;
  }
  /* &:focus {
    outline-color: var(--color-primary);
  } */
`;

const StBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translate(0, -50%);
`;
const StBtnImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
