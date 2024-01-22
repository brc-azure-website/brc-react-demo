import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./feature/appStateSlice";

export const store = configureStore({
  reducer: {
    appState: appStateSlice
  }
});