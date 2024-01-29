import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        uid: null,
    },
    reducers: {
        loadAuth: (state, action) => {
            state.isAuthenticated = true;
            state.uid = action.payload.uid;
        },
        removeAuth: (state) => {
            state.isAuthenticated = false;
            state.uid = null;
        },
    },
});



export const { loadAuth, removeAuth } = authSlice.actions;
export const authDetails = (state) => state.auth;
export default authSlice.reducer;