// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteComment, getComment, updateComment } from "../../redux/modules/commentSlice";


// const CommentList = ({ collectionId }) => {
//   const [inputValue, setInputValue] = useState("");
//   const dispatch = useDispatch();
//   const commentList = useSelector((state) => state.commentSlice);
//   console.log(commentList);

//   useEffect(() => {
//     dispatch(getComment(collectionId));
//   }, []);

//   const onDelete = (e) => {
//     e.preventDefault();
//     const commentId = e.target.value
//     dispatch(deleteComment(commentId));
//     window.location.reload()
//   };


//   const onUpdate = (e) => {
//     e.preventDefault();
//     const commentId = e.target.value;
//     if (inputValue === "") {
//       alert("수정해주세요");
//     } else {
//       dispatch(updateComment({ commentId, comment: inputValue }));
//       setInputValue("");
//     }
//   };
//   return (
//     <>
//       <ul>
//         {commentList.map((data, idx) => {
//           return (
//             <li key={idx}>
//               <p>{data.writerName}</p>
//               <p>{data.comment}</p>
//               <input
//                 onChange={(e) => setInputValue(e.target.value)}
//               ></input>

//               <button type="button" value={data.comment_id} onClick={onDelete}>
//                 삭제
//               </button>
//               <button type="button" value={data.comment_id} onClick={onUpdate}>
//                 수정
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };
// export default CommentList;
