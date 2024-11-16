import SvgIcon from "./SvgIcon";
import { selectLanguageList, selectLanguageValue, setLanguage } from "../slices/language";
import { useStoreDispatch, useStoreSelector } from "../hooks";
import type { Language } from "../slices/language";
import type { MouseEvent } from "react";

export default function LanguageDropdown() {
  const dispatch = useStoreDispatch();
  const languageList = useStoreSelector(selectLanguageList);
  const languageValue = useStoreSelector(selectLanguageValue);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.closest(".language-dropdown")?.classList.toggle("language-dropdown--active");
  };
  const handleItemClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.closest(".language-dropdown")?.classList.toggle("language-dropdown--active");

    const languageValue = event.currentTarget.dataset.value;

    if (languageValue) {
      dispatch(setLanguage(languageValue as Language));
    }
  };

  return (
    <div className="language-dropdown">
      <button className="language-dropdown__btn" type="button" onClick={handleClick}>
        <SvgIcon className="language-dropdown__btn-flag" name={languageList[languageValue].svgName} />
        <span className="language-dropdown__btn-text">{languageList[languageValue].text}</span>
        <SvgIcon className="language-dropdown__btn-icon" name="chevron-down" />
      </button>
      <ul className="language-dropdown__list">
        {Object.entries(languageList).map(([language, languageItem]) => (
          <li className="language-dropdown__item language-dropdown-item" key={language}>
            <button
              className="language-dropdown-item__btn"
              data-value={language}
              type="button"
              onClick={handleItemClick}
            >
              <SvgIcon className="language-dropdown-item__btn-flag" name={languageItem.svgName} />
              <span className="language-dropdown-item__btn-text">{languageItem.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
