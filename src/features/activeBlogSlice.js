import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: "blog",
};

const activeBlogSlice = createSlice({
  name: "active_blog",
  initialState,
  reducers: {
    setActiveBlog: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setActiveBlog } = activeBlogSlice.actions;
export const selectActiveBlog = (state) => state.active_blog.data;

export default activeBlogSlice.reducer;
