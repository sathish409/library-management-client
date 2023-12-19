import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burrows: [],
  // selectedBurrow: {},
};
const burrowSlic = createSlice({
  name: "burrow",
  initialState,
  reducers: {
    setBurrows: (state, { payload }) => {
      state.burrows = payload;
    },
    setABurrow: (state, { payload }) => {
      state.selectedBurrow = payload;
    },
  },
});

const { reducer, actions } = burrowSlic;

export const { setBurrows, setABurrow } = actions;
export default reducer;
