import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./slices/uiSlice";

const store = configureStore({
  reducer: combineReducers({
    ui: uiSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
