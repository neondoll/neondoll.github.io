import LanguageDropdown from "./LanguageDropdown";
import ThemeCheckbox from "./ThemeCheckbox";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <ThemeCheckbox />
        <LanguageDropdown />
      </div>
    </header>
  );
}
