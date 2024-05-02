import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../features/loginSlice"
import newsReducer from "../features/newsSlice"

export const store = configureStore({
  reducer: {
    login: loginReducer,
    news: newsReducer,
  },
})
