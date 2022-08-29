import React, { useState } from "react";

const SearchWrap = () => {

  const [search, setSearch] = useState("");
  const onChangehandler = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="searchBar">
      <input type="text" value={search} onChange={onChangehandler} />

    </div>
  )
}
export default SearchWrap;
