import React, { useState } from "react";
import Input from "../../elements/Input"

const SearchWrap = () => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  console.log("id :", search);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearch({ search });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2>Collections을 검색하세요</h2>
      <Input onChange={onChangeHandler} name="search" type="text" />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchWrap;
