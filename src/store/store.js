import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storySlice from "../features/storySlice";

const rootReducer = combineReducers({
  story: storySlice
})

export const store = configureStore({
  reducer: rootReducer
})