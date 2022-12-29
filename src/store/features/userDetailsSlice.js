import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUrl from "../../api/utils";

const initialState = {
    loading: false,
    user: {},
    albums: {},
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

export const getAlbums = createAsyncThunk('user/getUser',
    async (id, { dispatch, rejectWithValue }) => {
        const res = await fetchUrl(`users/${id}/albums`);

        if (typeof (res) === "object") {
            dispatch(setAlbums(res));
        } else {
            return rejectWithValue(res);
        }
    })

export const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.user = action.payload
        },
        setAlbums: (state, action) => {
            state.albums = action.payload
        }
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
        [getAlbums.fulfilled]: (state) => {
            state.loading = false;
        }
    }
})

export const { setUserDetails, setAlbums } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;