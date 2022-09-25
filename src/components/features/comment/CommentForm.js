import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SlideupModal from "../user/SlideupModal";
import { useDispatch, useSelector } from "react-redux";
import icon_go from "../../../shared/svg/icon_go.svg";
import {
  deleteComment,
  getComment,
  updateComment,
  addComment,
} from "../../../redux/modules/commentSlice";
import { ReactComponent as IconMore } from "../../../shared/svg/icon_moreicon.svg"

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
        ) : ""}

        <div /* style={{ marginBottom: "40px" }} */>
          <ul>
            {commentList.length === 0 ? (
              <div style={{
                marginTop: "3rem",
                display: "flex",
                justifyContent: "center",
                fontSize: "1rem"
              }}>ㅤ댓글이 없습니다ㅤ</div>
            ) : (
              commentList?.map((data, idx) => {
                return (
                  <StProfileDiv key={data.comment_id}>
                    <StCommentImgDiv
                      style={{
                        verticalAlign: "middle",
                        marginTop: "0.3rem",
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
                            fontSize: "0.87",
                            marginTop: "0px",
                            display: "block",
                            marginBlockStart: "0em",
                            marginBlockEnd: "0em",
                            marginInlineStart: "0px",
                            marginInlineEnd: "0px",
                          }}
                        >
                          {/* 작성자 */}
                          {data.writerName}
                        </p>
                        <span style={{
                          fontSize: "0.8rem",
                          marginBottom: "0.5rem",
                          color: "#adadad",
                          display: "-webkit-box",
                          webkitBoxOrient: "vertical",
                          WebkitLineClamp: "3",
                          overflow: "hidden",
                        }}>
                          {/* 댓 내용 */}
                          {data.comment}</span>
                      </li>
                    </StCommentValueDiv>
                    <StCommentBtnDiv>
                      <StCommentBtn
                        value={data.comment_id}
                        onClick={saveCommentData}
                      >
                      </StCommentBtn>
                      <IconMore
                        setModal={setModal}
                        style={{
                          pointerEvents: "none",
                          width: "1.125rem",
                          height: "1.125rem"
                        }}
                      />
                    </StCommentBtnDiv>
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
              onChange={(e) => setNewInputValue(e.target.value)}
              value={newinputValue}
              placeholder="ㅤ댓글을 수정해주세요 ;-)"
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
              >
              </StInput>
              <StButton type="submit">
                <Icon src={icon_go} />
              </StButton>
            </StInputDiv>
          </StCommentForm>
        </>
      )}
    </StContainer>
  );
};
export default CommentList;


const StContainer = styled.div`
  border-radius: 16px;
  background-color: #fff;
`
const StWrap = styled.div`
  height: 30.5rem;
  width: 360px;
      background-color: transparent;
      overflow: scroll;
      overflow-x: hidden;
      `;


const StCommentForm = styled.form`
      /* position: fixed; */
      z-index: 90;
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
      /* display: none; */
      right: 30px;
      top: 25px;
      cursor: pointer;
      `;
const Icon = styled.img`
  height: 1.2rem;
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
      padding: 0.1rem 1.5rem 0;
  background-color: #fff;
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

      margin: 170% auto 0 ;
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
