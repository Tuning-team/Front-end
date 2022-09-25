import React from "react";
import useInputs from "../../hooks/useInput";
import { getVideo } from "../../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";
import icon_search_enabled from "../../../shared/svg/icon_search_enabled.svg";
import Frame from "../../../shared/svg/Frame.svg";
import icon_back_enabled from "../../../shared/svg/icon_back_enabled.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../common/elements/SearchInput";
import Icon_search from "../../../shared/svg/24_ena_search.svg";

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
      <Form width="auto">
        <StInput
          onChange={onChange}
          name="keyword"
          required
          value={keyword}
          type="text"
          placeholder="찾고싶은 영상을 검색해보세요."
        />
        <StBtn type="submit">
          <StBtnImg onClick={onClickHandler} src={Icon_search} />
        </StBtn>
      </Form>
    </>
  );
};
export default SearchVideo;
const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  position: relative;
`;
const IconBack = styled.img`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0 0.25rem 0.75rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const TitleLogo = styled.img`
  margin-top: 0.688rem;
  height: 1.625rem;
`;
const TitleSubmit = styled.div`
  font-size: 0.625rem;
  font-weight: 500;
  width: 2.5rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  color: var(--color-disabled);

  margin-right: 0.75rem;
  display: flex;
  align-items: center;
`;

const Form = styled.div`
  border-top: solid var(--color-background) 1px;
  border-bottom: solid var(--color-background) 1px;
  padding: 1rem 0 1rem 0;
  position: relative;
  width: ${(props) => props.width || "20.438rem"};
`;

const StInput = styled.input`
  background: ${(props) => props.backgroundColor || "var(--color-background)"};
  padding: 0.375rem 1rem;
  border-radius: 18px;
  width: 20.438rem;
  height: 2.25rem;
  box-sizing: border-box;
  border: none;
  font-size: 1rem;
  font-weight: normal;
  &::placeholder {
    color: #adadad;
  }
  &:focus {
    outline-color: var(--color-primary);
  }
`;

const StBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translate(0, -50%);
`;
const StBtnImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
