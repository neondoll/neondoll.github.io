import TextByLanguage from "./TextByLanguage";
import { selectLanguageValue } from "../../slices/language";
import { useStoreSelector } from "../../hooks";

export interface LanguageTextProps {
  text: TextByLanguage;
}

export default function LanguageText({ text }: LanguageTextProps) {
  const languageValue = useStoreSelector(selectLanguageValue);

  return <>{text.get(languageValue)}</>;
}
