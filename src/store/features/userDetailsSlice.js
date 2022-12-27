import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUrl from "../../api/utils";
import axios from "axios";

const initialState = {
    loading: false,
    user: {},
    error: "",
}

export const getUser = createAsyncThunk('user/getUser',
    async (id, { dispatch, rejectWithValue }) => {
        /*  const res = await fetchUrl(`users/${id}`);
 
         if (typeof (res) === "object") {
             dispatch(setUserDetails(res));
         } else {
             return rejectWithValue(res);
         } */

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

            if (response.statusText !== "OK" && response.status !== 200) {
                throw new Error("Server error!");
            }
            return dispatch(setUserDetails(response.data))
        } catch (error) {
            return error.message;
        }
        
    })

export const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.user = action.payload
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

export const { setUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;