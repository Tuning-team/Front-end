import React, { useState } from "react";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import useInputs from "../../hooks/useInput";
import { getVideo } from "../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SearchVideo = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  // const data = useSelector(
  //   (state) => state.myCollectionSlice.searchResult.data
  // );
  // const searchResult
  const [{ keyword }, onChange, reset] = useInputs({
    keyword: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    reset();
    dispatch(getVideo(keyword));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2>추가할 영상 검색하기</h2>
      <Input onChange={onChange} name="keyword" value={keyword} type="text" />
      <Button> Search </Button>
    </form>
  );
};
export default SearchVideo;
