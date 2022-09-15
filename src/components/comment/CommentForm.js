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
  const [modal, setModal] = useState("read");
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
    setModal("read");
  };

  const onUpdate = (e) => {
    e.preventDefault();
    const commentId = e.target.id;
    console.log(commentId, editComment)
    if (newinputValue === "") {
      alert("수정해주세요");
    } else {
      dispatch(updateComment({ commentId, editComment }));
      setInputValue("");
      setRefresh(true);
      setNewInputValue("");
      setModal("read");
      // window.location.reload();
    }
  };

  const onModify = () => {
    setModal("modify")
  }

  console.log(commentList);

  function saveCommentData(e) {
    setCommentData(e.target.value)
    setModal("menu")
  }

  const editComment = {
    comment: newinputValue,
  };
  console.log(commentData)
  return (
    <div style={{
      position: "relative"
    }}>
      {modal === "menu" ?
        <Smore>
          <ChooseBtn>
            {/* <input onChange={(e) => setInputValue(e.target.value)}></input> */}
            <Btn type="button" onClick={onModify}>수정하기</Btn>
            <Btn type="button" id={commentData} onClick={onDelete}>삭제하기</Btn>
          </ChooseBtn>
          <Close onClick={() => setModal(!modal)}>닫기</Close>
        </Smore>
        : modal === "modify" ?
          <StCommentForm style={{ zIndex: "110" }} action="" id={commentData} onSubmit={onUpdate}>
            <StInputDiv>
              <StInput
                type="text"
                onChange={(e) => setNewInputValue(e.target.value)}
                value={newinputValue}
                placeholder="댓글 수정해주세요 ;-)"
                style={{
                  position: "relative"
                }}
              />
              <StButton type="submit"> 수정 </StButton>
            </StInputDiv>
          </StCommentForm>
          :
          <>
            <StCommentForm action="" onSubmit={onCreate}>
              <StInputDiv>
                <StInput
                  type="text"
                  onChange={(e) => setNewInputValue(e.target.value)}
                  value={newinputValue}
                  placeholder="댓글을 입력해주세요 :D"
                  style={{
                    position: "relative"
                  }}
                />
                <StButton type="submit"> 등록 </StButton>
              </StInputDiv>
            </StCommentForm>
          </>
      }


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
    </div >
  );
};
export default CommentList;

const StCommentForm = styled.form`
      position: fixed;
      z-index: 90;
      bottom: 4.5rem;
      `

const StInput = styled.input`
      position: relative;
      display: flex;
      width: 100%;
      font-size: 16px;
      padding: 0.5rem 3.5rem 0.5rem 0.5rem;
      `

const StInputDiv = styled.div`
      position: relative;
      display: flex;
      width: 344px;
      padding: 1rem;
      background-color: white;
      `

const StButton = styled.button`
      background: none;
      border: none;
      outline: none;
      position: absolute;
      right: 30px;
      top :25px;
      cursor: pointer;
      `

const Smore = styled.div`
      display: block;
      height: 100vh;
      width: 375px;
      background: rgba(0,0,0,0.3);
      position: fixed;
      z-index: 110;
      top: 0;
      `

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

      position: fixed;
      bottom: 4.5rem;
      margin: 9px;

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

      position: fixed;
      bottom: 0.5rem;
      margin: 9px;
      `;

const Btn = styled.div`
      text-align: center;
      width: 100%;
      padding-bottom: 5px;
      `;

