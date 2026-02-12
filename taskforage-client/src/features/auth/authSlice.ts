import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
    isAuthentiated:boolean;
}

const initialState:AuthState = {
    isAuthentiated:localStorage.getItem("isAuthenticated") === "true",
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
     loginSuccess(state) {
        state.isAuthentiated = true;
        localStorage.setItem("isAuthenticated",'true');
     },
     logout(state) {
        state.isAuthentiated = false;
        localStorage.removeItem("isAuthenticated");
     },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;