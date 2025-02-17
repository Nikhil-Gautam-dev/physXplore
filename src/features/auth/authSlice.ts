import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (_, action) => {
            return { token: action.payload }
        },
        logout: (_, __) => {
            return { token: "" }
        }
    }
})

export const { login, logout } = authSlice.actions

export const authReducer = authSlice.reducer