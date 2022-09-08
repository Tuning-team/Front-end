import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

// [GET] COMMENT 
export const getComment = createAsyncThunk("GET_COMMENT", async (collection_id) => {
    const response = await instance.get(`/comments/${collection_id}`);
    console.log(response.data);
    return response.data;
});

// [ADD] COMMENT  [=>collection_id 남음]
export const addComment = createAsyncThunk("ADD_COMMENT", async (newList) => {
    // const response = await instance.post(`/comments/${collection_id}`, newList);
    const response = await instance.post(`/comments/`, newList);
    return response.data;
})

// [DELETE] COMMENT [=>collection_id 남음]
export const deleteComment = createAsyncThunk("DELETE_COMMENT", async (commentId) => {
    // const response = await instance.delete(`/comments/${collection_id}`,);
    const response = await instance.delete(`/comments/`,);
    return commentId;
})


// [UPDATE] COMMENT [=>collection_id 남음]
export const updateComment = createAsyncThunk(
    "UPDATE_COMMENT",
    async ({ commentId, username, comment }) => {
        // const response = await instance.put(`/comments/${collection_id}`,
        const response = await instance.put(`/comments/`,
            {
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
        [getComment.fulfilled]: (state, { payload }) => [payload],
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