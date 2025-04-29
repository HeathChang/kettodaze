import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iSearchSlice {

}

const initState: iSearchSlice = {

};

const searchSlice = createSlice({
    name: "search",
    initialState: initState,
    reducers: {

    }

});

// export actions
export const {  } = searchSlice.actions;
// export reducers
export default searchSlice.reducer;