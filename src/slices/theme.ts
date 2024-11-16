import { createSlice } from "@reduxjs/toolkit";
import type { StoreDispatch, StoreState } from "../store";

type Theme = "light" | "dark";
type ThemeState = { value: Theme };

const initialState: ThemeState = { value: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    replaceThemeValue: (state, action) => {
      state.value = action.payload;

      if (state.value === "dark") {
        document.documentElement.classList.add("dark");
      }
      else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

const { replaceThemeValue } = themeSlice.actions;

export const getTheme = () => (dispatch: StoreDispatch) => {
  const localTheme = localStorage.getItem("theme");

  if (localTheme) {
    dispatch(replaceThemeValue(localTheme));
  }
  else {
    const windowTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    dispatch(replaceThemeValue(windowTheme));
  }
};
export const selectTheme = (state: StoreState) => state.theme;
export const selectThemeValue = (state: StoreState) => state.theme.value;
export const setTheme = (value: Theme) => (dispatch: StoreDispatch) => {
  dispatch(replaceThemeValue(value));

  localStorage.setItem("theme", value);
};
export default themeSlice.reducer;
