import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUrl from "../../api/utils";
import axios from "axios";

const initialState = {
    loading: false,
    posts: [],
    error: "",
}

export const getPosts = createAsyncThunk('posts/getPosts',
    async (_, { dispatch, rejectWithValue }) => {
        const res = await fetchUrl("posts?_limit=40");

        if (typeof (res) === "object") {
            dispatch(setPost(res));
        } else {
            return rejectWithValue(res);
        }
    })

export const addNewPost = createAsyncThunk('posts/addNewPost',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
                userId: Object.values(data)[0],
                title: Object.values(data)[1],
                body: Object.values(data)[2],
            })
            
            if (typeof (res) === "object") {
                dispatch(addPost(res.data))
            } else {
                throw new Error("Server error!");
            }

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload
        },
        addPost: (state, action) => {
            state.posts.unshift(action.payload)
        },
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.loading = true;
        },
        [getPosts.fulfilled]: (state) => {
            state.loading = false;
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [addNewPost.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setPost, addPost } = postSlice.actions;
export default postSlice.reducer;