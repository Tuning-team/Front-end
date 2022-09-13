import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../elements/Input"
import { getList, searchSlice } from "../../redux/modules/searchSlice";
import CollectionList from "../../common/CollectionList"

const SearchWrap = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.searchSlice);

  console.log(searchList);


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
          {/* map 쓰실 때 참고하쎄용~ */}
          {/* map((data) => {"배고팡"})<- 괄호 들어가면 반드시 결과에 return */}
          {/* map((data) => "배고팡")<- 괄호 안 들어가면 자동으로 return 적용 */}
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