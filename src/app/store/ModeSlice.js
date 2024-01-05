import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

const ModeSlice = createSlice({
  name: "mode",
  initialState, // This line is correct, providing the initial state
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { setTheme } = ModeSlice.actions;

export default ModeSlice.reducer;
