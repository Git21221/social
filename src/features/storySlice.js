import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isStoryOpened: false,
  storyId: null,
};

const storySlice = createSlice({
  name: "sotry",
  initialState,
  reducers: {
    isStoryOpen: (state, action) => {
      state.isStoryOpened = action.payload.isStoryOpened;
      state.storyId = action.payload.storyId;
    },
  },
});

export default storySlice.reducer;
export const { isStoryOpen } = storySlice.actions;
