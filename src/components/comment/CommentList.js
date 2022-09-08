import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, getComment, updateComment } from "../../redux/modules/commentSlice";


const CommentList = ({ commentId, collectionId, comment }) => {
  console.log(collectionId)
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComment(collectionId));
  }, []);

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteComment(commentId));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(updateComment({ commentId, comment: inputValue }));
      setInputValue("");
    } else alert("수정해주세요");
  };

  return (
    <>
      <ul>
        <li>Comment Number: {commentId}</li>
        <li>내용 : {comment}</li>
      </ul>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button type="button" onClick={onDelete}>
        삭제
      </button>
      <button type="button" onClick={onUpdate}>
        수정
      </button>
    </>
  );
};
export default CommentList;