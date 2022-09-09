import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

// [GET] COMMENT 
export const getComment = createAsyncThunk("GET_COMMENT", async (collection_id) => {
    const response = await instance.get(`/comments/${collection_id}`);
    return response.data.data;
});

// [ADD] COMMENT  [=>collection_id 남음]
export const addComment = createAsyncThunk("ADD_COMMENT", async ({ newList, collectionId }) => {
    const response = await instance.post(`/comments/${collectionId}`, newList);
    console.log(response)
    return response.data;
})

// [DELETE] COMMENT [=>collection_id 남음]
export const deleteComment = createAsyncThunk("DELETE_COMMENT", async (commentId) => {
    const response = await instance.delete(`/comments/${commentId}`,);
    return response.data;
})


// [UPDATE] COMMENT [=>collection_id 남음]
export const updateComment = createAsyncThunk("UPDATE_COMMENT", async ({ commentId, comment }) => {
    const response = await instance.put(`/comments/${commentId}`, comment);
    console.log(response)
}
)

export const commentSlice = createSlice({
    name: "commentList",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getComment.fulfilled]: (state, { payload }) => payload,
        [addComment.fulfilled]: (state, { payload }) => [...state, payload],
        [deleteComment.fulfilled]: (state, { payload }) => [...state, payload],
        [updateComment.fulfilled]: (state, { payload }) => [...state, payload],
        // return state.map((comment) => {
        //     if (comment.id === payload.commentId) {
        //         return { ...comment, username: payload.username, comment: payload.comment };
        //     } else {
        //         return comment;
        //     }
        // })

    },
})