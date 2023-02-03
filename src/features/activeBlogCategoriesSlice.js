import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};

const activeBlogCategoriesSlice = createSlice({
  name: "active_blog_categories",
  initialState,
  reducers: {
    setActiveBlogCategories: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setActiveBlogCategories } = activeBlogCategoriesSlice.actions;
export const selectActiveBlogCategories = (state) =>
  state.active_blog_categories.data;

export default activeBlogCategoriesSlice.reducer;
