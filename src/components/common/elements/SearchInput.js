import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getList } from "../../../redux/modules/searchSlice";
import Icon_search from "../../../shared/svg/24_ena_search.svg";

const SearchInput = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
    dispatch(getList(search));
    nav("/search");
  };
  return (
    <Form onSubmit={onSearch} width={props.width}>
      <StInput
        onChange={onChangeHandler}
        name="search"
        type="text"
        placeholder="찾고싶은 컬렉션을 검색해보세요"
        backgroundColor={props.backgroundColor}
      />
      <StBtn type="submit">
        <StBtnImg src={Icon_search} />
      </StBtn>
    </Form>
  );
};
export default SearchInput;
const Form = styled.form`
  position: relative;
  width: ${(props) => props.width || "20.438rem"};
`;

const StInput = styled.input`
  background: ${(props) => props.backgroundColor || "#efefef"};
  padding: 0.375rem 1rem;
  border-radius: 18px;
  width: 100%;
  height: 2.25rem;
  box-sizing: border-box;
  border: none;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  &::placeholder {
    color: #adadad;
  }
  &:focus {
    outline: none;
  }
`;

const StBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translate(0, -50%);
`;
const StBtnImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
