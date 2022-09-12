import React, { useState } from "react";
import Icon_search from "../../svg/Icon_search.svg";
import Button from "../../elements/Button";
import useInputs from "../../hooks/useInput";
import { getVideo } from "../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchVideo = () => {
  const nav = useNavigate();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  // const data = useSelector(
  //   (state) => state.myCollectionSlice.searchResult.data
  // );
  // const searchResult
  const [{ keyword }, onChange, reset] = useInputs({
    keyword: "",
  });

  const onClickHandler = (e) => {
    if (keyword === "") {
      alert("검색어를 입력해주세요");
      return;
    }
    dispatch(getVideo(keyword));
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

      <Input
        onChange={onChange}
        name="keyword"
        required
        value={keyword}
        type="text"
        placeholder="검색하기"
      />
      <Btn onClick={onClickHandler} src={Icon_search} />
    </Form>
  );
};
export default SearchVideo;
const Form = styled.div`
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
  background: #efefef;
  border-radius: 50px;
  width: 17rem;
  height: 40px;
  border: solid #efefef;
`;
const InputWrap = styled.div``;
