import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/user_sinup_login/userSlic";
import bookReducer from "./pages/book/bookSlice";
import burrowReducer from "./pages/burrow-history/burrowSlice";
import systemReducer from "./system-state/systemSlice";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
    bookInfo: bookReducer,
    burrowInfo: burrowReducer,
    systemInfo: systemReducer,
  },
});

export default store;
