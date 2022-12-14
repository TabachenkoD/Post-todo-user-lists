import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/postSlice";
import todoSlice from "./features/todoSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
    reducer: {
        post: postSlice,
        todo: todoSlice,
        user: userSlice,
    },
})