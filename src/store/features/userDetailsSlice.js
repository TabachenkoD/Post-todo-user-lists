import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUrl from "../../api/utils";

const initialState = {
    loading: false,
    user: {},
    albums: {},
    todos: {},
    posts: {},
    error: "",
}

export const getUser = createAsyncThunk('user/getUser',
    async (id, { dispatch, rejectWithValue }) => {
        const res = await fetchUrl(`users/${id}`);

        if (typeof (res) === "object") {
            dispatch(setUserDetails(res));
        } else {
            return rejectWithValue(res);
        }
    })

export const getAlbums = createAsyncThunk('user/getAlbums',
    async (id, { dispatch, rejectWithValue }) => {
        const res = await fetchUrl(`users/${id}/albums`);

        if (typeof (res) === "object") {
            dispatch(setAlbums(res));
        } else {
            return rejectWithValue(res);
        }
    })

export const getTodosAPI = createAsyncThunk('user/getTodosAPI',
    async (id, { dispatch, rejectWithValue }) => {
        const res = await fetchUrl(`users/${id}/todos`);

        if (typeof (res) === "object") {
            dispatch(setTodos(res));
        } else {
            return rejectWithValue(res);
        }
    })

export const getTodos = createAsyncThunk('user/getTodos',
    async (id, { dispatch, getState }) => {
        const todoState = getState().todo.todos.filter(todo => todo.userId === Number(id));

        if (todoState.length) {
            dispatch(setTodos(todoState))
        } else {
            dispatch(getTodosAPI(id));
        }

    }
)

export const getPosts = createAsyncThunk('user/getPosts',
    async (id, { dispatch, rejectWithValue, getState }) => {
        const postState = getState().post.posts.filter(item => item.userId === Number(id));

        if (postState.length) {
            dispatch(setPosts(postState));

        } else {
            const res = await fetchUrl(`users/${id}/posts`);

            if (typeof (res) === "object") {
                dispatch(setPosts(res));
            } else {
                return rejectWithValue(res);
            }
        }
    }
)

export const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.user = action.payload
        },
        setAlbums: (state, action) => {
            state.albums = action.payload
        },
        setTodos: (state, action) => {
            state.todos = action.payload
        },
        setPosts: (state, action) => {
            state.posts = action.payload
        },
    },
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true;
        },
        [getUser.fulfilled]: (state) => {
            state.loading = false;
        },
        [getUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const { setUserDetails, setAlbums, setTodos, setPosts } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;