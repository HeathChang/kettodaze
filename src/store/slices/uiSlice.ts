import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iUISlice {
    isHeaderVisible: boolean;
    header: string;
    isLoading: boolean;
    isMobile: boolean;
}

const initState: iUISlice = {
    isMobile: false,
    isHeaderVisible: false,
    header: "K-ettodaze",
    isLoading: false
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initState,
    reducers: {
        setHeader: (state, action: PayloadAction<string>) => {
            state.isHeaderVisible = true;
            state.header = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        clearUiSlice: (state) => {
            state.isHeaderVisible = false;
            state.header = "Wordle";
        },
        setMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
        }
    }

});

// export actions
export const { setMobile, setHeader, setIsLoading, clearUiSlice } = uiSlice.actions;
// export reducers
export default uiSlice.reducer;