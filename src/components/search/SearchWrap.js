import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../elements/Input"
import { getList, searchSlice } from "../../redux/modules/searchSlice";
import CollectionList from "../../common/CollectionList"

const SearchWrap = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.searchSlice);
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    dispatch(getList(search))

  };

  const searchResult = searchList?.filter(data => data.collectionTitle.indexOf(search) !== -1
    || data.description.indexOf(search) !== -1)

  return (
    <>

      <form onSubmit={onSearch}>
        <h2>Collections을 검색하세요</h2>

        <Input onChange={onChangeHandler} name="search" type="text" />
        <button type="submit">Search</button>
      </form>
      <div>
        <ul>
          {search === "" ?
            <div>추천검색어</div>
            :
            <CollectionList state={searchResult} />
          }
        </ul>
      </div>
    </>
  );
};

export default SearchWrap;

// searchList.filter(data => data.collectionTitle.indexOf(search) !== -1
//   || data.description.indexOf(search) !== -1).map((data) => {
//     console.log(data)
//     return <div key={data._id}>
//       <li></li>
//       <p>{data.collectionTitle}</p>
//     </div>
//   })