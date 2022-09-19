import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  getComment,
  updateComment,
  addComment,
} from "../../../redux/modules/commentSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const CommentList = ({ collectionId }) => {
  const [newinputValue, setNewInputValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [modal, setModal] = useState("read");
  const [commentData, setCommentData] = useState();
  const commentList = useSelector((state) => state.commentSlice.data);
  const dispatch = useDispatch();

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

  const onDelete = (e) => {
    e.preventDefault();
    const commentId = e.target.id;
    dispatch(deleteComment(commentId));
    setRefresh(true);
    setModal("read");
  };

  const onUpdate = (e) => {
    e.preventDefault();
    const commentId = e.target.id;
    if (newinputValue === "") {
      alert("수정해주세요");
    } else {
      dispatch(updateComment({ commentId, editComment }));
      setInputValue("");
      setRefresh(true);
      setNewInputValue("");
      setModal("read");
    }
  };

  const onModify = () => {
    setModal("modify");
  };

  function saveCommentData(e) {
    setCommentData(e.target.value);
    setModal("menu");
  }

  const editComment = {
    comment: newinputValue,
  };
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {modal === "menu" ? (
        <StMoreDiv>
          <StChooseBtnDiv>
            {/* <input onChange={(e) => setInputValue(e.target.value)}></input> */}
            <StBtnDiv type="button" onClick={onModify}>
              수정하기
            </StBtnDiv>
            <StBtnDiv type="button" id={commentData} onClick={onDelete}>
              삭제하기
            </StBtnDiv>
          </StChooseBtnDiv>
          <StCloseDiv onClick={() => setModal(!modal)}>닫기</StCloseDiv>
        </StMoreDiv>
      ) : modal === "modify" ? (
        <StCommentForm
          style={{ zIndex: "110" }}
          action=""
          id={commentData}
          onSubmit={onUpdate}
        >
          <StInputDiv>
            <StInput
              type="text"
              onChange={(e) => setNewInputValue(e.target.value)}
              value={newinputValue}
              placeholder="댓글을 수정해주세요 ;-)"
            />
            <StButton type="submit"> 수정 </StButton>
          </StInputDiv>
        </StCommentForm>
      ) : (
        <>
          <StCommentForm action="" onSubmit={onCreate}>
            <StInputDiv>
              <StInput
                type="text"
                onChange={(e) => setNewInputValue(e.target.value)}
                value={newinputValue}
                placeholder="댓글을 입력해주세요 :D"
                style={{
                  position: "relative",
                }}
              />
              <StButton type="submit"> 등록 </StButton>
            </StInputDiv>
          </StCommentForm>
        </>
      )}

      <div style={{ marginBottom: "80px" }}>
        {/* <div> */}
        <ul>
          {commentList.length === 0 ? (
            <div>댓글이 없습니다</div>
          ) : (
            commentList?.map((data, idx) => {
              return (
                <StProfileDiv key={data.comment_id}>
                  <StCommentImgDiv
                    style={{
                      verticalAlign: "middle",
                      marginTop: "5px",
                      marginBottom: "5px",
                      marginRight: "5px",
                    }}
                  >
                    <StProfileImg
                      src={data.writerProfilePic}
                      alt="profileImg"
                    ></StProfileImg>
                  </StCommentImgDiv>
                  <StCommentValueDiv>
                    <li key={idx}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          marginTop: "5px",
                          marginBottom: "5px",
                        }}
                      >
                        작성자: {data.writerName}
                      </p>
                      <p>{data.comment}</p>
                    </li>
                  </StCommentValueDiv>
                  <StCommentBtnDiv>
                    <StCommentBtn
                      value={data.comment_id}
                      onClick={saveCommentData}
                    >
                      <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        setModal={setModal}
                        style={{
                          pointerEvents: "none",
                        }}
                      />
                    </StCommentBtn>
                  </StCommentBtnDiv>
                </StProfileDiv>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};
export default CommentList;

const StCommentForm = styled.form`
  position: fixed;
  z-index: 90;
  bottom: 4.5rem;
`;

const StInput = styled.input`
  position: relative;
  display: flex;
  width: 100%;
  font-size: 16px;
  padding: 0.5rem 3.5rem 0.5rem 0.5rem;
`;

const StInputDiv = styled.div`
  position: relative;
  display: flex;
  width: 344px;
  padding: 1rem;
  background-color: white;
`;

const StButton = styled.button`
  background: none;
  border: none;
  outline: none;

  position: absolute;
  right: 30px;
  top: 25px;
  cursor: pointer;
`;

const StMoreDiv = styled.div`
  display: block;
  height: 100vh;
  width: 375px;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 110;
  top: 0;
`;

const StProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const StCommentImgDiv = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
`;

const StCommentBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
`;

const StCommentBtn = styled.button`
  background: none;
  border: none;
  outline: none;
`;

const StCommentValueDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

const StProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 70%;
  overflow: hidden;
  margin-left: 5px;
`;

const StChooseBtnDiv = styled.div`
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

const StCloseDiv = styled.div`
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

const StBtnDiv = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 5px;
`;
