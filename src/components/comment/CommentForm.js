import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  getComment,
  updateComment,
  addComment,
} from "../../redux/modules/commentSlice";
import Input from "../../elements/Input";

const CommentList = ({ collectionId }) => {
  console.log(collectionId);
  const [newinputValue, setNewInputValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.commentSlice);

  useEffect(() => {
    dispatch(getComment(collectionId));
    setRefresh(false);
  }, [refresh]);

  const onCreate = (e) => {
    e.preventDefault();
    if (newinputValue) {
      const newList = { comment: newinputValue };
      dispatch(addComment({ newList, collectionId }));
      setNewInputValue("");
      setRefresh(true);
    } else {
      alert("공란입니다. 댓글을 작성해주세요");
    }
  };
  console.log(commentList);

  const onDelete = (e) => {
    e.preventDefault();
    const commentId = e.target.value;
    dispatch(deleteComment(commentId));
    setRefresh(true);
  };

  const onUpdate = (e) => {
    e.preventDefault();
    console.log(commentList);
    const commentId = e.target.value;
    console.log(commentId);
    if (inputValue === "") {
      alert("수정해주세요");
    } else {
      dispatch(updateComment({ commentId, editComment }));
      setInputValue("");
      setRefresh(true)
      // window.location.reload();
    }
  };
  console.log(commentList);

  const editComment = {
    comment: inputValue,
  };

  return (
    <>
      <form action="" onSubmit={onCreate}>
        <label>댓글</label>
        <Input
          type="text"
          onChange={(e) => setNewInputValue(e.target.value)}
          value={newinputValue}
          // maxLength="35"
          placeholder="댓글을 작성해주세요."
        />
        <button type="submit"> 등록 </button>
      </form>

      <ul>
        {commentList?.map((data, idx) => {
          return (
            <li key={idx}>
              <p>{data.writerName}</p>
              <p>{data.comment}</p>
              <input onChange={(e) => setInputValue(e.target.value)}></input>
              <button type="button" value={data.comment_id} onClick={onDelete}>
                삭제
              </button>
              <button type="button" value={data.comment_id} onClick={onUpdate}>
                수정
              </button>
            </li >
          );
        })}
      </ul >
    </>
  );
};
export default CommentList;

// import React, { useEffect, useState } from "react";
// import CommentList from "./CommentList";
// import { useDispatch, useSelector } from "react-redux";
// import { getComment, addComment } from "../../redux/modules/commentSlice"

// const CommentForm = ({ collectionId }) => {
//   console.log(collectionId);
//   const [inputValue, setInputValue] = useState("");
//   const dispatch = useDispatch();

//   const onCreate = (e) => {
//     e.preventDefault();
//     if (inputValue) {
//       const newList = { comment: inputValue };
//       dispatch(addComment({ newList, collectionId }));
//       setInputValue("");
//     } else {
//       alert("공란입니다. 댓글을 작성해주세요");
//     }
//   };

//   return (
//     <>
//       <form action="" onSubmit={onCreate}>
//         <label>댓글</label>
//         <Input
//           type="text"
//           onChange={(e) => setInputValue(e.target.value)}
//           value={inputValue}
//           // maxLength="35"
//           placeholder="댓글을 작성해주세요."
//         />
//         <button type="submit"> 등록 </button>
//       </form>
//     </>
//   );
// };

// export default CommentForm;
