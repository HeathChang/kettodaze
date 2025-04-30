import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iAuthSlice {
    userData: any;
    headers: any;
    isLoading: any;
    isSuccess: any;
    isError: any;
}

const initState: iAuthSlice = {
    userData: null,
    headers: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initState,
    reducers: {
        setUserData(state, action) {
            state.userData = action.payload;
        },
    }
});

export const { setUserData, } = authSlice.actions;
export default authSlice.reducer;