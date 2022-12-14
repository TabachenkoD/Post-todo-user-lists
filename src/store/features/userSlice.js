import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUrl from "../../api/utils";

const initialState = {
    loading: false,
    users: [],
    error: "",
}

export const getUsers = createAsyncThunk( 'users/getUsers',
    async (_, { dispatch, rejectWithValue }) => {
        const res = await fetchUrl("users");
        
        if (typeof (res) === "object") {
            dispatch(setUser(res));
        } else {
            return rejectWithValue(res);
        }
    })

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.users = action.payload
        },
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state) => {
            state.loading = false;
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;