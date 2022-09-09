import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { useDispatch, useSelector } from "react-redux";
import { getComment, addComment } from "../../redux/modules/commentSlice"
import Input from "../../elements/Input"


const CommentForm = ({ collectionId }) => {
  console.log(collectionId);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const onCreate = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newList = { comment: inputValue };
      dispatch(addComment({ newList, collectionId }));
      setInputValue("");
    } else {
      alert("공란입니다. 댓글을 작성해주세요");
    }
  };

  return (
    <>
      <form action="" onSubmit={onCreate}>
        <label>댓글</label>
        <Input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          // maxLength="35"
          placeholder="댓글을 작성해주세요."
        />
        <button type="submit"> 등록 </button>
      </form>
    </>
  );
};

export default CommentForm;
