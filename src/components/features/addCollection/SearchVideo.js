import React from "react";
import Icon_search from "../../../shared/svg/Icon_search.svg";
import useInputs from "../../hooks/useInput";
import { getVideo } from "../../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchVideo = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [{ keyword }, onChange, reset] = useInputs({
    keyword: "",
  });
  const onClickHandler = (e) => {
    if (keyword === "") {
      alert("검색어를 입력해주세요");
      return;
    }
    const token = null;
    const key = null;
    dispatch(getVideo({ keyword, token, key }));
    localStorage.setItem("keyword", keyword);
    reset();
  };

  return (
    <Form>
      <Title
        onClick={() => {
          nav(-1);
        }}
      >
        &lt;
      </Title>
      <InputWrap>
        <Input
          onChange={onChange}
          name="keyword"
          required
          value={keyword}
          type="text"
          placeholder="검색하기"
        />
        <Btn onClick={onClickHandler} src={Icon_search} />
      </InputWrap>
    </Form>
  );
};
export default SearchVideo;
const Form = styled.div`
  padding: 1.3rem 1.3rem 1.3rem 1rem;
  display: flex;
  justify-content: space-around;
`;
const Btn = styled.img`
  width: 30px;
  height: 30px;
  padding-top: 10px;
`;
const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 123.8%;
  padding: 5px;
`;
const Input = styled.input`
  width: 15rem;
  height: 2rem;
  border: unset;
  background-color: transparent;
`;
const InputWrap = styled.div`
  display: flex;
  width: 20.438rem;
  height: 2.25rem;
  margin: 1.25rem 1.5rem 1rem;
  padding: 0.375rem 1rem;
  border-radius: 25px;
  background-color: var(--color-background);
  justify-content: space-around;
  align-items: center;
`;
