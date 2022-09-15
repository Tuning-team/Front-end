import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteComment,
  getComment,
  updateComment,
  addComment,
} from "../../redux/modules/commentSlice";
import Input from "../../elements/Input";
import More from "../../common/More";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const CommentList = ({ collectionId }) => {
  console.log(collectionId);
  const [newinputValue, setNewInputValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [modal, setModal] = useState(false);
  const [commentData, setCommentData] = useState();
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
    const commentId = e.target.id;
    console.log(commentId);
    dispatch(deleteComment(commentId));
    setRefresh(true);
    setModal(!modal);
  };

  const onUpdate = (e) => {
    e.preventDefault();
    const commentId = e.target.id;
    if (inputValue === "") {
      alert("수정해주세요");
    } else {
      dispatch(updateComment({ commentId, editComment }));
      setInputValue("");
      setRefresh(true)
      setModal(!modal);
      // window.location.reload();
    }
  };
  console.log(commentList);

  function saveCommentData(e) {
    setCommentData(e.target.value)
    setModal(!modal)
  }

  const editComment = {
    comment: inputValue,
  };
  console.log(commentData)
  return (
    <>
      {modal && (
        <More>
          <ChooseBtn>
            <input onChange={(e) => setInputValue(e.target.value)}></input>
            <Btn type="button" id={commentData} onClick={onUpdate}>수정하기</Btn>
            <Btn type="button" id={commentData} onClick={onDelete}>삭제하기</Btn>
          </ChooseBtn>
          <Close onClick={() => setModal(!modal)}>닫기</Close>
        </More>
      )}

      <form action="" onSubmit={onCreate}>
        <label>댓글 </label>
        <Input
          type="text"
          onChange={(e) => setNewInputValue(e.target.value)}
          value={newinputValue}
          // maxLength="35"
          placeholder="댓글을 작성해주세요."
        />
        <button type="submit"> 등록 </button>
      </form>
      <div>
        <ul>
          {commentList?.map((data, idx) => {
            return (
              <li key={idx}>
                <p>{data.writerName}</p>
                <p>{data.comment}</p>
                <button value={data.comment_id} onClick={saveCommentData}>
                  <FontAwesomeIcon icon={faEllipsisVertical} setModal={setModal}
                    style={{
                      pointerEvents: "none"
                    }} />
                </button>

                {/* <div>
              <button type="button" value={data.comment_id} onClick={onDelete}>
                삭제
              </button>
              <button type="button" value={data.comment_id} onClick={onUpdate}>
                수정
                </button>
              </div> */}
              </li >
            );
          })}
        </ul >
      </div>
    </>
  );
};
export default CommentList;


const ChooseBtn = styled.div`
  background-color: #ffffff;
  width: 22.063rem;
  height: 5.938rem;
  color: #b295e9;

  font-size: 1.25rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
`;

const Btn = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 5px;
`;


const Close = styled.div`
  background-color: #ffffff;
  width: 22.063rem;
  height: 3.125rem;
  color: #b295e9;
  margin-top: 10px;
  font-size: 1.25rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
`;
