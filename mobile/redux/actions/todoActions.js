import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import axios from "axios";

export const addTodo = createAsyncThunk(
    "addTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/todo", todoData)
            console.log(data)
            return true
        } catch (error) {
            console.warn(error)
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getTodos = createAsyncThunk(
    "getTodos",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/todo")
            return data.result
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })