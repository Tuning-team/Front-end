import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { useDispatch, useSelector } from "react-redux";
import { getComment, addComment } from "../../redux/modules/commentSlice"
import Input from "../../elements/Input"

// [comment] 남은 작업
// useNavigate, location으로 collectionId 받아와서
// dispatch로 addcommment Axios로 전달

// [search] 남은작업
// 받아온거 map돌리기

const CommentForm = () => {
  const [inputValue, setInputValue] = useState("")

  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.commentSlice)

  useEffect(() => {
    dispatch(getComment());
  }, []);

  const onCreate = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newList = { comment: inputValue };
      dispatch(addComment(newList));
      setInputValue("");
    } else {
      alert("공란입니다. 댓글을 작성해주세요");
    }
  };

  return (
    <>
      <form action='' onSubmit={onCreate}>
        <label>댓글</label>
        <Input
          type='text'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          // maxLength="35"
          placeholder="댓글을 작성해주세요."
        />
        <button type='submit'> 등록 </button>
      </form>
      <ul>
        {commentList.map((data) => (
          <CommentList
            key={data.id}
            commentId={data.id}
            username={data.username}
            comment={data.comment}
          />
        ))}
      </ul>


    </>
  );
};

export default CommentForm;
