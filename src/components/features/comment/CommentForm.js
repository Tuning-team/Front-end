import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  getComment,
  updateComment,
  addComment,
} from "../../../redux/modules/commentSlice";
import { getUserInfo } from "../../../redux/modules/userSlice";
import { ReactComponent as IconMore } from "../../../shared/icon/24_ena_more.svg";
import { ReactComponent as IconActSend } from "../../../shared/icon/24_act_send.svg";
import { ReactComponent as IconSend } from "../../../shared/icon/24_ena_send.svg";
import { ReactComponent as IconEdit } from "../../../shared/icon/24_ena_edit.svg";
import { ReactComponent as IconDelete } from "../../../shared/icon/24_ena_delete.svg";
import Modal from "../../common/Modal";

const CommentList = ({ collectionId }) => {
  const [inputValue, setInputValue] = useState("");
  const [fixValue, setFixValue] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [modal, setModal] = useState("read");

  const [commentData, setCommentData] = useState();
  const commentList = useSelector((state) => state.commentSlice.data);
  const userState = useSelector((state) => state.userSlice.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComment(collectionId));
    setRefresh(false);
  }, [refresh]);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const onCreate = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newList = { comment: inputValue };
      dispatch(addComment({ newList, collectionId }));
      setInputValue("");
      setRefresh(true);
    } else {
      alert("공란입니다. 댓글을 작성해주세요");
    }
  };

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteComment(commentData));
    setRefresh(true);
    setModal("read");
  };

  const onUpdate = (e) => {
    const commentId = e.target.id;
    if (fixValue === "") {
      alert("수정해주세요");
    } else {
      dispatch(updateComment({ commentId, editComment }));
      setInputValue("");
      setRefresh(true);
      setFixValue("");
      setModal("read");
    }
  };

  const onModify = () => {
    setModal("modify");
  };

  function saveCommentData(e) {
    if (e.target.value !== userState.user._id) {
      return alert("권한이 없습니다.");
    }
    setFixValue(e.target.title);
    setCommentData(e.target.id);
    setModal("menu");
  }

  const editComment = {
    comment: fixValue,
  };

  return (
    <StContainer>
      <StWrap>
        {modal === "menu" ? (
          <Modal
            setModal={setModal}
            margin="2rem auto 1rem auto"
            backdrop="none"
          >
            <StBtnDiv
              onClick={onModify}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                padding: "0.3rem 0.5rem",
                margin: "0.5em 0",
              }}
            >
              <IconEdit
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  pointerEvents: "none",
                }}
              />
              <StBtn
                style={{
                  pointerEvents: "none",
                }}
              >
                수정하기
              </StBtn>
            </StBtnDiv>

            <StBtnDiv
              onClick={onDelete}
              id={commentData}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                padding: "0.3rem 0.5rem",
                margin: "0.5em 0",
              }}
            >
              <IconDelete
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  pointerEvents: "none",
                }}
              />
              <StBtn
                style={{
                  pointerEvents: "none",
                }}
              >
                삭제하기
              </StBtn>
            </StBtnDiv>
          </Modal>
        ) : (
          ""
        )}

        <div>
          <ul>
            {commentList.length === 0 ? (
              <StNoCommentDiv> 댓글이 없습니다 </StNoCommentDiv>
            ) : (
              commentList?.map((data, idx) => {
                return (
                  <StProfileDiv key={data.comment_id}>
                    <StCommentImgDiv>
                      <StProfileImg
                        src={data.writerProfilePic}
                        alt="profileImg"
                      />
                    </StCommentImgDiv>
                    <StCommentValueDiv>
                      <li key={idx}>
                        <StUserName>
                          {/* 작성자 */}
                          {data.writerName}
                        </StUserName>
                        <StCommentSpan>
                          {/* 댓 내용 */}
                          {data.comment}
                        </StCommentSpan>
                      </li>
                    </StCommentValueDiv>

                    <StCommentBtn
                      onClick={saveCommentData}
                      id={data.comment_id}
                      value={data.user_id}
                      title={data.comment}
                    >
                      <IconMore
                        setModal={setModal}
                        style={{
                          pointerEvents: "none",
                          width: "1.125rem",
                          height: "1.125rem",
                        }}
                      />
                    </StCommentBtn>
                  </StProfileDiv>
                );
              })
            )}
          </ul>
        </div>
      </StWrap>

      {modal === "modify" ? (
        <StCommentForm
          style={{ zIndex: "110" }}
          action=""
          id={commentData}
          onSubmit={onUpdate}
        >
          <StInputDiv>
            <StInput
              type="text"
              onChange={(e) => setFixValue(e.target.value)}
              value={fixValue}
              placeholder="수정할 내용을 입력해주세요 ;)"
            />
            <StButton type="submit">
              <IconSend
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            </StButton>
          </StInputDiv>
        </StCommentForm>
      ) : (
        <>
          <StCommentForm action="" onSubmit={onCreate}>
            <StInputDiv>
              <StInput
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                placeholder="ㅤ댓글을 작성해주세요 :-D"
              ></StInput>
              {inputValue.length !== 0 ? (
                <StButton type="submit">
                  <IconActSend
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                  />
                </StButton>
              ) : (
                <StButton style={{ cursor: "arrow" }}>
                  <IconSend
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                  />
                </StButton>
              )}
            </StInputDiv>
          </StCommentForm>
        </>
      )}
    </StContainer>
  );
};
export default CommentList;

const StCommentSpan = styled.span`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: #adadad;
  display: -webkit - box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StBtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 0.3rem 0.5rem;
  margin: 0.5em 0;
`;

const StBtn = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: -0.7px;
  text-align: center;
  /* padding: 7px; */
  padding-left: 10px;
  border-bottom: 1px solid #eee;
  &:nth-child(2) {
    padding-bottom: 0;
    border: none;
  }
`;

const StUserName = styled.p`
  font-weight: bold;
  font-size: 0.87m;
  margin-top: 0px;
  display: block;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
  margin-inline-start: 0rem;
  margin-inline-end: 0em;
`;

const StNoCommentDiv = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
`;

const StContainer = styled.div`
  border-radius: 16px;
  background-color: #fff;
`;
const StWrap = styled.div`
  height: 30.5rem;
  /* width: 360px; */
  background-color: transparent;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  overflow-x: hidden;
`;

const StCommentForm = styled.form`
  z-index: 999;
  bottom: 4.5rem;
  padding: 0.688rem 1.25rem 2.375rem 1.25rem;
`;

const StInput = styled.input`
  display: flex;
  width: 100%;
  height: 2.25rem;
  font-size: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border: none;
  outline: none;
  border-radius: 1rem;
  background-color: #f5f5f5;
`;

const StInputDiv = styled.div`
  display: flex;
  background-color: white;
`;

const StButton = styled.button`
  background: none;
  border: none;
  outline: none;
  right: 30px;
  top: 25px;
  cursor: pointer;
`;

const StProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.1rem 1.5rem 0;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

const StCommentImgDiv = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  margin-top: 0.3rem;
  margin-right: 5px;
`;

const StCommentBtn = styled.button`
  display: flex;
  justify-content: center;
  vertical-align: middle;
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
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 70%;
  overflow: hidden;
  margin-left: 5px;
`;
