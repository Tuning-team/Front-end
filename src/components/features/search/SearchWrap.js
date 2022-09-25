import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getList } from "../../../redux/modules/searchSlice";
import Loading from "../../common/Loading";
import CollectionList from "../../common/CollectionList";
import Icon_search from "../../../shared/svg/24_ena_search.svg";

const SearchWrap = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const searchList = useSelector(
    (state) => state.searchSlice.data);
  const loading = useSelector(
    (state) => state.searchSlice.loading);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    dispatch(getList(search));
  };

  const searchResult = searchList?.filter(
    (data) =>
      data.collectionTitle.indexOf(search) !== -1 ||
      data.description.indexOf(search) !== -1
  );

  return (
    <StSearchDiv >
      <StForm
        onSubmit={onSearch} width={props.width}>
        <StInput
          onChange={onChangeHandler}
          name="search"
          type="text"
          placeholder="찾고싶은 컬렉션을 검색해보세요"
        />
        <StBtn type="submit">
          <StBtnImg src={Icon_search} />
        </StBtn>
      </StForm>

      {/* //!결과부분 */}
      <div>
        {loading ? (
          <Loading />
        ) : search === 0 ? (
          <StText>검색 결과가 없습니다.</StText>
        ) : (
          <CollectionList
            state={searchResult}
            title="ㅤ검색한"
          />
        )
        }
      </div>
    </StSearchDiv >

  );
};

export default SearchWrap;

const StSearchDiv = styled.div`
height:100vh;
width: 100%;
  background: ${(props) => props.backgroundColor || "#eeeef6"};
`
const StForm = styled.form`
  position: relative;
  width: ${(props) => props.width || "20.438rem"};
  margin-top: 2rem;
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

const StInput = styled.input`
  background: #ffffff;
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
  &:focus {
    outline-color: var(--color-primary);
  }
`;

const StText = styled.p`
  font-size: 1rem;
  text-align: center;
`;
