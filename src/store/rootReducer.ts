import { combineReducers } from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSlice";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
    ui: uiSlice,
    auth: authSlice
});

export default rootReducer;