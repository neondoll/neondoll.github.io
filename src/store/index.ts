import languageReducer from "../slices/language";
import themeReducer from "../slices/theme";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: { language: languageReducer, theme: themeReducer } });

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;

export default store;
