import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        uid: null,
        docId:null,
    },
    reducers: {
        loadAuth: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.uid = action.payload.uid;
            state.docId=action.payload.docId;
        },
        removeAuth: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.role = null;
            state.uid = null;
            state.docId=null;
        },
    },
});



export const { loadAuth, removeAuth } = authSlice.actions;
export const authDetails = (state) => state.auth;
export default authSlice.reducer;