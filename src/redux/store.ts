import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basicSlice from "./slices/basicSlice";

const store = configureStore({
  reducer: combineReducers({
    basic: basicSlice,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
