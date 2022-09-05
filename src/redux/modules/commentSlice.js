import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// [GET] COMMENT 
export const getComment = createAsyncThunk("GET_COMMENT", async () => {
    // const response = await axios.get("https://www.myspaceti.me/api/comments");
    const response = await axios.get("http://localhost:3002/member");
    console.log(response.data);
    return response.data;
});

// [ADD] COMMENT 
export const addComment = createAsyncThunk("ADD_COMMENT", async (newList) => {
    const response = await axios.post("http://localhost:3002/member", newList);
    return response.data;
})

// [DELETE] COMMENT
export const deleteComment = createAsyncThunk("DELETE_COMMENT", async (commentId) => {
    const response = await axios.delete(`http://localhost:3002/member/${commentId}`,);
    return commentId;
})


// [UPDATE] COMMENT
export const updateComment = createAsyncThunk(
    "UPDATE_COMMENT",
    async ({ commentId, username, comment }) => {
        const response = await axios.put(`http://localhost:3002/member/${commentId}`, {
            username: username, comment: comment
        });
        return { commentId, username, comment };
    }
)

export const commentSlice = createSlice({
    name: "commentList",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getComment.fulfilled]: (state, { payload }) => [...payload],
        [addComment.fulfilled]: (state, { payload }) => [...state, payload],
        [deleteComment.fulfilled]: (state, { payload }) =>
            state.filter((comment) => comment.id !== payload),
        [updateComment.fulfilled]: (state, { payload }) => {
            return state.map((comment) => {
                if (comment.id === payload.commentId) {
                    return { ...comment, username: payload.username, comment: payload.comment };
                } else {
                    return comment;
                }
            })
        },

    },
})