import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload.user;
        },
        signInFailure: (state) => {
            state.loading = false;
        }
    }
})

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;