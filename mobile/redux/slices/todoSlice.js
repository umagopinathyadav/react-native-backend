import { createSlice } from "@reduxjs/toolkit";
import { addTodo, getTodos } from "../actions/todoActions";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(addTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todoAdded = true
        })
        .addCase(addTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(getTodos.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getTodos.fulfilled, (state, { payload }) => {
            state.loading = false
            state.notes = payload
        })
        .addCase(getTodos.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = todoSlice.actions
export default todoSlice.reducer