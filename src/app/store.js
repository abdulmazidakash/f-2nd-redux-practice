import { configureStore } from "@reduxjs/toolkit";
import countersReducer from '../features/counters/CountersSlice';
import postsReducer from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    counters: countersReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // 🚀 Disable serialization check
    }),
});

export default store;
