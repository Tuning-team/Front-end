import React, { useState } from "react";

const SearchWrap = () => {

  const [search, setSearch] = useState("")

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }
  console.log("id :", search)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setSearch({ search })
  }

  return (
    <form>
      <h2>Collections을 검색하세요</h2>
      <input onChange={onChangeHandler} name="search" type="text" />
      <button type='submit'>Search</button>
    </form>
  );

};

export default SearchWrap;
