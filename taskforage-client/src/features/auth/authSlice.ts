import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
    isAuthentiated:boolean;
}

const initialState:AuthState = {
    isAuthentiated:!!localStorage.getItem("token"),
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
     loginSuccess(state) {
        state.isAuthentiated = true;
     },
     logout(state) {
        state.isAuthentiated = false;
        localStorage.removeItem('token');
     },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;