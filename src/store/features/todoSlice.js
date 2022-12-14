import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import fetchUrl from "../../api/utils";

const initialState = {
    loading: false,
    todos: [],
    error: "",
}

export const getTodos = createAsyncThunk('todos/getTodos',
    async (_, { dispatch, rejectWithValue }) => {
        const res = await fetchUrl("todos");

        if (typeof (res) === "object") {
            dispatch(setTodo(res));
        } else {
            return rejectWithValue(res);
        }
    }
)

export const toggleStatus = createAsyncThunk('todos/toggleStatus',
    async (id, { dispatch, rejectWithValue, getState }) => {
        const todoState = getState().todo.todos.find(todo => todo.id === id);

        try {
            const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                completed: !todoState.completed
            })

            if (response.statusText !== "OK" && response.status !== 200) {
                throw new Error("Server error!");
            }

            dispatch(toggleComplete({ id }));

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodo: (state, action) => {
            state.todos = action.payload
        },
        toggleComplete: (state, action) => {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
    },
    extraReducers: {
        [getTodos.pending]: (state) => {
            state.loading = true;
        },
        [getTodos.fulfilled]: (state) => {
            state.loading = false;
        },
        [getTodos.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [toggleStatus.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const { setTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;