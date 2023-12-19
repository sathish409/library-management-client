import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  allUsers: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { setUser, setAllUsers } = actions;
export default reducer;
