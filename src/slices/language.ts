import { createSlice } from "@reduxjs/toolkit";
import type { StoreDispatch, StoreState } from "../store";
import type { SvgIconName } from "../components/SvgIcon";

export type Language = "ru" | "en";
type LanguageItem = { text: string; svgName: SvgIconName };
type LanguageState = { list: Record<Language, LanguageItem>; value: Language };

const initialState: LanguageState = {
  list: { ru: { text: "RU", svgName: "russian" }, en: { text: "EN", svgName: "english" } },
  value: "ru",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    replaceLanguageValue: (state, action) => {
      state.value = action.payload;

      document.documentElement.setAttribute("lang", state.value);
    },
  },
});

const { replaceLanguageValue } = languageSlice.actions;

export const getLanguage = () => (dispatch: StoreDispatch) => {
  const localLanguage = localStorage.getItem("language");

  if (localLanguage) {
    dispatch(replaceLanguageValue(localLanguage));
  }
  else {
    const windowLanguage = document.documentElement.getAttribute("lang");

    dispatch(replaceLanguageValue(windowLanguage));
  }
};
export const selectLanguage = (state: StoreState) => state.language;
export const selectLanguageList = (state: StoreState) => state.language.list;
export const selectLanguageValue = (state: StoreState) => state.language.value;
export const setLanguage = (value: Language) => (dispatch: StoreDispatch) => {
  dispatch(replaceLanguageValue(value));

  localStorage.setItem("language", value);
};
export default languageSlice.reducer;
