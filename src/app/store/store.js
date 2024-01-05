import { configureStore } from "@reduxjs/toolkit";
import ModeSlice from "./ModeSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => {
  return configureStore({
    reducer: {
      mode: ModeSlice,
    },
  });
};

export const wrapper = createWrapper(makeStore);
