import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";


const reduxStore = configureStore({
    reducer: {
        todos: todoSlice,
    },
})

export default reduxStore