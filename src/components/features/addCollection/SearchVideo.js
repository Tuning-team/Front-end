import React from "react";
import useInputs from "../../hooks/useInput";
import { getVideo } from "../../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";
import icon_search_enabled from "../../../shared/svg/icon_search_enabled.svg";
import Frame from "../../../shared/svg/Frame.svg";
import icon_back_enabled from "../../../shared/svg/icon_back_enabled.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchVideo = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
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
    <>
      <Title>
        <IconBack src={icon_back_enabled} alt="icon" onClick={() => nav(-1)} />
        <TitleLogo src={Frame} alt="icon" />
        <TitleSubmit>확인</TitleSubmit>
      </Title>
      <InputWrap>
        <Input
          onChange={onChange}
          name="keyword"
          required
          value={keyword}
          type="text"
          placeholder="찾고싶은 영상을 검색해보세요."
        />
        <Btn onClick={onClickHandler} src={icon_search_enabled} />
      </InputWrap>
    </>
  );
};
export default SearchVideo;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%
  height: 3rem;
  padding: 0.688rem 0 0;
  background-color: #fff;
  border-bottom: 1px solid #EEEEF6;
`;
const IconBack = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const TitleLogo = styled.img``;
const TitleSubmit = styled.div`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #adadad;
  margin: 0 3px 0 0;
`;

const Btn = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const Input = styled.input`
  width: 12rem;
  height: 2rem;
  border: unset;
  background-color: transparent;
`;
const InputWrap = styled.div`
  display: flex;
  width: 18rem;
  height: 2.25rem;
  margin: 1rem;
  padding: 0.375rem 1rem;
  border-radius: 25px;
  background-color: var(--color-background);
  justify-content: space-around;
  align-items: center;
`;
