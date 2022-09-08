import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../elements/Input"
import { getList, searchSlice } from "../../redux/modules/searchSlice";

const SearchWrap = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.searchSlice);
  console.log(searchList)

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  console.log("id :", search);

  const onSearch = (e) => {
    e.preventDefault();
    dispatch(getList(search))

  };

  return (
    <form onSubmit={onSearch}>
      <h2>Collections을 검색하세요</h2>
      <Input onChange={onChangeHandler} name="search" type="text" />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchWrap;
