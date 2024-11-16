import SvgIcon from "./SvgIcon";
import { selectThemeValue, setTheme } from "../slices/theme";
import { useStoreDispatch, useStoreSelector } from "../hooks";
import type { ChangeEvent } from "react";

export default function ThemeCheckbox() {
  const dispatch = useStoreDispatch();
  const themeValue = useStoreSelector(selectThemeValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTheme(event.target.checked ? "dark" : "light"));
  };

  return (
    <div className="theme-checkbox">
      <input
        className="theme-checkbox__input"
        checked={themeValue === "dark"}
        id="theme-checkbox-input"
        type="checkbox"
        onChange={handleChange}
      />
      <label className="theme-checkbox__label" htmlFor="theme-checkbox-input">
        <SvgIcon className="theme-checkbox__icon" name="moon" />
        <span className="theme-checkbox__ball" />
        <SvgIcon className="theme-checkbox__icon" name="sun" />
      </label>
    </div>
  );
}
