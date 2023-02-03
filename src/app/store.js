import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import activeBlogSlice from "features/activeBlogSlice";
import activeBlogCategoriesSlice from "features/activeBlogCategoriesSlice";

const reducers = combineReducers({
  active_blog: activeBlogSlice,
  active_blog_categories: activeBlogCategoriesSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["active_blog", "active_blog_categories"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
