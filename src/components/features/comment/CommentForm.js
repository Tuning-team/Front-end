import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import icon_go from "../../../shared/svg/icon_go.svg";
import {
  deleteComment,
  getComment,
  updateComment,
  addComment,
} from "../../../redux/modules/commentSlice";
import { ReactComponent as IconMore } from "../../../shared/svg/icon_moreicon.svg";
import SlideUpModal from "../../common/SlideUpModal";
import Modal from "../../common/Modal";

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
    <StContainer>
      <StWrap>
        {modal === "menu" ? (
          // <SlideUpModal setModal={setModal}>
          //   <StBtn onClick={onModify}>수정하기</StBtn>
          //   <StBtn onClick={onDelete} id={commentData}>삭제하기</StBtn>
          //   <StBtn onClick={() => setModal(!modal)}>닫기</StBtn>
          // </SlideUpModal>
          <Modal setModal={setModal}>
            <StBtn onClick={onModify}>수정하기</StBtn>
            <StBtn onClick={onDelete} id={commentData}>삭제하기</StBtn>
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
                      <StProfileImg src={data.writerProfilePic} alt="profileImg" />
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
                    <StCommentBtnDiv
                      onClick={saveCommentData}
                      value={data.comment_id}>
                      <StCommentBtn>
                        <IconMore setModal={setModal} />
                      </StCommentBtn>
                    </StCommentBtnDiv>
                  </StProfileDiv>
                );
              })
            )}
          </ul>
        </div>
      </StWrap>

      {
        modal === "modify" ? (
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
                placeholder="수정할 내용을 입력해주세요 ;)"
              />

              <StButton type="submit">
                <Icon src={icon_go} />
              </StButton>
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
                  placeholder="ㅤ댓글을 작성해주세요 :-D"
                ></StInput>
                <StButton type="submit">
                  <Icon src={icon_go} />
                </StButton>
              </StInputDiv>
            </StCommentForm>
          </>
        )
      }
    </StContainer >
  );
};
export default CommentList;



const StCommentSpan = styled.span`
font-size: 0.8rem;
margin-bottom: 0.5rem;
color: #adadad;
display: -webkit - box;
-webkit-box-orient: vertical;
// Webkit-line-clamp: 3;
overflow: hidden;
`;

// style = {{
//   pointerEvents: "none",
//     width: "1.125rem",
//       height: "1.125rem",

//                           }} 

const StBtn = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: -0.7px;
  text-align: center;
  padding: 7px;
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
  width: 360px;
  background-color: transparent;
  overflow: scroll;
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
const Icon = styled.img`
  height: 1.2rem;
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
  width: 2.25rem;
  height: 2.25rem;
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

  margin: 170% auto 0;
  /* position: fixed;
      bottom: 4.5rem;
      margin: 9px; */
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

  /* position: fixed; */
  bottom: 0.5rem;
  margin: 9px;
`;

const StBtnDiv = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 5px;
`;
