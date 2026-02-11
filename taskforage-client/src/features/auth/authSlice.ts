import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
    isAuthentiated:boolean;
}

const initialState:AuthState = {
    isAuthentiated:false,
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
     },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;